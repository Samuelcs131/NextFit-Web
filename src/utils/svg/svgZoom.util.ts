export function setupZoomEventHandler(elementId: string, limitZoom = 4) {
  const _SVG = document.getElementById(elementId)
  const VB =
    _SVG
      ?.getAttribute('viewBox')
      ?.split(' ')
      .map((c) => +c) || []
  const NF = 10
  const NAV_MAP = {
    187: { dir: 1, act: 'zoom', name: 'in' } /* + */,
    61: { dir: 1, act: 'zoom', name: 'in' } /* + WTF, FF? */,
    189: { dir: -1, act: 'zoom', name: 'out' } /* - */,
    173: { dir: -1, act: 'zoom', name: 'out' } /* - WTF, FF? */,
    37: { dir: -1, act: 'move', name: 'left', axis: 0 } /* ⇦ */,
    38: { dir: -1, act: 'move', name: 'up', axis: 1 } /* ⇧ */,
    39: { dir: 1, act: 'move', name: 'right', axis: 0 } /* ⇨ */,
    40: { dir: 1, act: 'move', name: 'down', axis: 1 } /* ⇩ */,
  }

  let rID: number | null = null
  let f = 0
  let nav: any = {} // eslint-disable-line @typescript-eslint/no-explicit-any
  let tg = Array(4)
  const DMAX = VB.slice(2), WMIN = 3

  function stopAni() {
    if(rID) cancelAnimationFrame(rID)
    rID = null
  }

  function update() {
    const k = ++f / NF
    const j = 1 - k
    const cvb = VB.slice()

    if (nav.act === 'zoom') {
      for (let i = 0; i < 4; i++) cvb[i] = j * VB[i] + k * tg[i]
    }

    if (nav.act === 'move') cvb[nav.axis] = j * VB[nav.axis] + k * tg[nav.axis]

    _SVG?.setAttribute('viewBox', cvb.join(' '))

    if (!(f % NF)) {
      f = 0
      VB.splice(0, 4, ...cvb)
      nav = {}
      tg = Array(4)
      stopAni()
      return
    }

    rID = requestAnimationFrame(update)
  }

  addEventListener(
    'keydown',
    (e) => {
      e.preventDefault()
    },
    false
  )

  addEventListener(
    'keypress',
    (e) => {
      e.preventDefault()
    },
    false
  )

  addEventListener(
    'keyup',
    (e) => {
      e.preventDefault()

      if (!rID && e.keyCode in NAV_MAP) {
        nav = NAV_MAP[e.keyCode]

        if (nav.act === 'zoom') {
          if (
            (nav.dir === -1 && VB[2] >= DMAX[0]) ||
            (nav.dir === 1 && VB[2] <= WMIN)
          ) {
            //console.log(`cannot ${nav.act} ${nav.name} more`);

            return
          }

          for (let i = 0; i < 2; i++) {
            tg[i + 2] = VB[i + 2] / Math.pow(2, nav.dir)
            tg[i] = 0.5 * (DMAX[i] - tg[i + 2])
          }
        } else if (nav.act === 'move') {
          if (
            (nav.dir === -1 && VB[nav.axis] <= 0) ||
            (nav.dir === 1 && VB[nav.axis] >= DMAX[nav.axis] - VB[2 + nav.axis])
          ) {
            //console.log(`at the edge, cannot go ${nav.name}`);
            return
          }

          tg[nav.axis] = VB[nav.axis] + 0.5 * nav.dir * VB[2 + nav.axis]
        }

        update()
      }
    },
    false
  )
}
