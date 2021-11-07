import '@mui/material/styles'

// https://mui.com/customization/breakpoints/#custom-breakpoints
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false // removes the `xs` breakpoint
    sm: false
    md: false
    lg: false
    xl: false
    mobile: true // adds the `mobile` breakpoint
    tablet: true
    laptop: true
    desktop: true
  }
}
