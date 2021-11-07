import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components'

import { createMuiTheme } from '@/utils/styles/createMuiTheme'
import { createStyledComponentTheme } from '@/utils/styles/createStyledTheme'
import { Palette } from '@/utils/styles/palette.const'

export interface ThemeProviderProps {
  palette?: Partial<typeof Palette>
}
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  palette = {},
}) => (
  <StyledComponentThemeProvider theme={createStyledComponentTheme({ palette })}>
    <MuiThemeProvider theme={createMuiTheme({ palette })}>
      {children}
    </MuiThemeProvider>
  </StyledComponentThemeProvider>
)
