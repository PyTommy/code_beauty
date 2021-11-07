import createTheme, {
  ThemeOptions as MuiThemeOptions,
} from '@mui/material/styles/createTheme'
import shadows, { Shadows } from '@mui/material/styles/shadows'

import { ThemeProviderProps } from '@/components/organisms/common/ThemeProvider'
import { BreakPoints } from '@/utils/styles/breakPoints.const'
import { Color } from '@/utils/styles/color.const'
import { Palette } from '@/utils/styles/palette.const'
import { Shape } from '@/utils/styles/shape.const'

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

export const createMuiTheme = ({ palette }: ThemeProviderProps) =>
  createTheme({
    ...defaultMuiThemeOptions,
    palette: { ...defaultMuiThemeOptions.palette, ...palette },
  })
