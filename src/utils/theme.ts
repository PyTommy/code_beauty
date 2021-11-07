import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme'
import shadows, { Shadows } from '@mui/material/styles/shadows'

import { Color } from '@utils/color.const'

createTheme()
export const themeOptions: ThemeOptions = {
  palette: {
    text: {
      primary: Color.textPrimary,
      secondary: Color.textSecondary,
      disabled: Color.textDisabled,
    },
    primary: {
      main: Color.primary,
      light: Color.primaryLight,
      dark: Color.primaryDark,
    },
    secondary: {
      main: Color.secondary,
      light: Color.secondaryLight,
      dark: Color.secondaryDark,
    },
    error: {
      main: Color.error,
      light: Color.errorLight,
      dark: Color.errorDark,
    },
    info: {
      main: Color.info,
      light: Color.infoLight,
      dark: Color.infoDark,
    },
    success: {
      main: Color.success,
      light: Color.successLight,
      dark: Color.successDark,
    },
    divider: Color.divider,
  },
  shape: {
    borderRadius: 2,
  },
  shadows: shadows.map(() => 'none') as Shadows,
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: Color.grey50,
          color: Color.grey800,
        },
      },
    },
  },
}
