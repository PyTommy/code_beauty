import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { createMuiTheme } from '@/utils/styles/muiTheme'
import { Palette } from '@/utils/styles/palette.const'
import { createStyledTheme } from '@/utils/styles/styledTheme'

export interface ThemeProviderProps {
  palette?: Partial<typeof Palette>
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  palette = {},
}) => (
  <StyledThemeProvider theme={createStyledTheme({ palette })}>
    <MuiThemeProvider theme={createMuiTheme({ palette })}>
      {children}
    </MuiThemeProvider>
  </StyledThemeProvider>
)
