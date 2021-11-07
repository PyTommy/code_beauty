import { DefaultTheme } from 'styled-components'

import { BreakPoints } from './breakPoints.const'
import { Palette } from './palette.const'
import { Shape } from './shape.const'

export const styledTheme: DefaultTheme = {
  palette: Palette,
  shape: Shape,
  breakpoints: BreakPoints,
} as const
