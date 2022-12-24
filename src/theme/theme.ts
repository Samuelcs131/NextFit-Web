interface IPresets {
  [key: string]: {
    main: string
    constrastText: string
  }
}

interface IThemeMode {
  [key: string]: {
    background: {
      color: string,
      constrastText: string
      caption: string
    },
    backgroundPage: {
      color: string
    }
  }
}

export const presets: IPresets = {
  purple: {
    main: '#7635dc',
    constrastText: '#fff'
  },
  green: {
    main: '#00ab55',
    constrastText: '#fff'
  },
  blue: {
    main: '#2065d1',
    constrastText: '#fff'
  },
  orange: {
    main: '#fda92d',
    constrastText: '#161c24'
  },
  red: {
    main: '#ff3030',
    constrastText: '#fff'
  }
}

export const themeMode: IThemeMode = {
  dark: {
    background: {
      color: '#161c24',
      constrastText: '#fff',
      caption: '#637381'
    },
    backgroundPage: {
      color: '#212b36'
    }
  },
  light: {
    background: {
      color: '#ffffff',
      constrastText: '#212b36',
      caption: '#919eab'
    },
    backgroundPage: {
      color: '#fbfbfa'
    }
  }
}
