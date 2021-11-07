import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import React from 'react'

import { muiTheme } from './styles/muiTheme'

export const AppProvider: React.FC = ({ children }) => (
  <MuiThemeProvider theme={muiTheme}>{{ children }}</MuiThemeProvider>
)
