<template>
  <div v-if="isFront" v-html="FrontBodySVG" ></div>
  <div v-else v-html="BackBodySVG" ></div>
</template>
<script setup lang="ts">
  import { computed } from 'vue'
  import BackBodySVG from 'src/assets/img/muscles/back-body.svg?raw'
  import FrontBodySVG from 'src/assets/img/muscles/front-body.svg?raw'

  interface IState {
    isFront?: boolean
    caves?: string
    deltoidsBack?: string
    glutes?: string
    hamstrings?: string
    latissimusDorsi?: string
    lowerBack?: string
    trapezius?: string
    wristFlexors?: string
    tricepsUpper?: string
    tricepsOuter?: string
    tricepsLower?: string
    chest?: string
    upperAbdominis?: string
    lowerAbdominis?: string
    innerBiceps?: string
    outerBiceps?: string
    quadriceps?: string
    wristExtensors?: string
    deltoidsSide?: string
    deltoidsFront?: string
    obliques?: string

  }

  const props = defineProps<IState>()

  const current = computed(() => {
    return ({
      caves: props.caves ?? 'transparent',
      deltoidsBack: props.deltoidsBack ?? 'transparent',
      glutes: props.glutes ?? 'transparent',
      hamstrings: props.hamstrings ?? 'transparent',
      latissimusDorsi: props.latissimusDorsi ?? 'transparent',
      lowerBack: props.lowerBack ?? 'transparent',
      trapezius: props.trapezius ?? 'transparent',
      wristFlexors: props.wristFlexors ?? 'transparent',
      tricepsUpper: props.tricepsUpper ?? 'transparent',
      tricepsOuter: props.tricepsOuter ?? 'transparent',
      tricepsLower: props.tricepsLower ?? 'transparent',
      chest: props.chest ?? 'transparent',
      upperAbdominis: props.upperAbdominis ?? 'transparent',
      lowerAbdominis: props.lowerAbdominis ?? 'transparent',
      innerBiceps: props.innerBiceps ?? 'transparent',
      outerBiceps: props.outerBiceps ?? 'transparent',
      quadriceps: props.quadriceps ?? 'transparent',
      wristExtensors: props.wristExtensors ?? 'transparent',
      deltoidsSide: props.deltoidsSide ?? 'transparent',
      deltoidsFront: props.deltoidsFront ?? 'transparent',
      obliques: props.obliques ?? 'transparent',
    })
  })
</script>
<style>
	.caves-muscle{fill:v-bind('current.caves');}
	.deltoidsBack-muscle{fill:v-bind('current.deltoidsBack');}
	.glutes-muscle{fill:v-bind('current.glutes');}
	.hamstrings-muscle{fill:v-bind('current.hamstrings');}
	.latissimusDorsi-muscle{fill:v-bind('current.latissimusDorsi');}
	.lowerBack-muscle{fill:v-bind('current.lowerBack');}
	.trapezius-muscle{fill:v-bind('current.trapezius');}
	.wristFlexors-muscle{fill:v-bind('current.wristFlexors');}
	.tricepsUpper-muscle{fill:v-bind('current.tricepsUpper');}
	.tricepsOuter-muscle{fill:v-bind('current.tricepsOuter');}
	.tricepsLower-muscle{fill:v-bind('current.tricepsLower');}

  .chest-muscle{fill:v-bind('current.chest');}
	.upperAbdominis-muscle{fill:v-bind('current.upperAbdominis');}
	.lowerAbdominis-muscle{fill:v-bind('current.lowerAbdominis');}
	.innerBiceps-muscle{fill:v-bind('current.innerBiceps');}
	.outerBiceps-muscle{fill:v-bind('current.outerBiceps');}
	.quadriceps-muscle{fill:v-bind('current.quadriceps');}
	.wristExtensors-muscle{fill:v-bind('current.wristExtensors');}
	.deltoidsSide-muscle{fill:v-bind('current.deltoidsSide');}
	.deltoidsFront-muscle{fill:v-bind('current.deltoidsFront');}
	.obliques-muscle{fill:v-bind('current.obliques');}

  .st0{fill:#080808;}
	.st1{fill:#101010;}
	.st2{fill:#191919;}
	.st3{fill:#212121;}
	.st4{fill:#292929;}
	.st5{fill:#313131;}
	.st6{fill:#3A3A3A;}
	.st7{fill:#424242;}
	.st8{fill:#4A4A4A;}
	.st9{fill:#525252;}
	.st10{fill:#5A5A5A;}
	.st11{fill:#636363;}
	.st12{fill:#6B6B6B;}
	.st13{fill:#737373;}
	.st14{fill:#7B7B7B;}
	.st15{fill:#848484;}
	.st16{fill:#8C8C8C;}
	.st17{fill:#949494;}
	.st18{fill:#9C9C9C;}
	.st19{fill:#A5A5A5;}
	.st20{fill:#ADADAD;}
	.st21{fill:#B5B5B5;}
	.st22{fill:#BDBDBD;}
	.st23{fill:#C5C5C5;}
	.st24{fill:#CECECE;}
	.st25{fill:#D6D6D6;}
	.st26{fill:#DEDEDE;}
	.st27{fill:#E6E6E6;}
	.st28{fill:#EFEFEF;}
	.st29{fill:#F7F7F7;}
	.st30{fill:#FFFFFF;}
  </style>
