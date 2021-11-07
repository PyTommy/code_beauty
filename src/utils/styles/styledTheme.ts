import { DefaultTheme } from 'styled-components'

import { BreakPoints } from './breakPoints.const'
import { Palette } from './palette.const'
import { Shape } from './shape.const'
import { ThemeProviderProps } from '@/components/organisms/common/ThemeProvider'

const defaultTheme: DefaultTheme = {
  palette: Palette,
  shape: Shape,
  breakpoints: BreakPoints,
} as const

export const createStyledTheme = ({ palette = {} }: ThemeProviderProps) => ({
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    ...palette,
  },
})
