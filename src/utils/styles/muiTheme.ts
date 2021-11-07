import createTheme, {
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles/createTheme'
import shadows, { Shadows } from '@mui/material/styles/shadows'

import { BreakPoints } from '@/utils/styles/breakPoints.const'
import { Color } from '@/utils/styles/color.const'
import { Palette } from '@/utils/styles/palette.const'
import { Shape } from '@/utils/styles/shape'

const defaultMuiThemeOptions: MuiThemeOptions = {
  palette: Palette,
  shape: Shape,
  shadows: shadows.map(() => 'none') as Shadows,
  breakpoints: {
    values: BreakPoints,
  },
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
} as const

export const muiTheme = createTheme(defaultMuiThemeOptions)
