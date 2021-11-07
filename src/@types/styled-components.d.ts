import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    palette: {
      text: {
        primary: string
        secondary: string
        disabled: string
      }
      primary: {
        main: string
        light: string
        dark: string
      }
      secondary: {
        main: string
        light: string
        dark: string
      }
      error: {
        main: string
        light: string
        dark: string
      }
      info: {
        main: string
        light: string
        dark: string
      }
      success: {
        main: string
        light: string
        dark: string
      }
      divider: string
    }
    shape: {
      borderRadius: number
    }
    breakpoints: {
      xs: number
      sm: number
      md: number
      lg: number
      xl: number
    }
  }
}
