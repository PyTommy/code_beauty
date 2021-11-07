import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { muiTheme } from './styles/muiTheme'
import { styledTheme } from './styles/styledTheme'

export const AppProvider: React.FC = ({ children }) => (
  <StyledThemeProvider theme={styledTheme}>
    <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>
  </StyledThemeProvider>
)
