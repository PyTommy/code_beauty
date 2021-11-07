import { ThemeProvider } from '@mui/material'
import React from 'react'

import { defaultTheme } from './theme'

export const AppProvider: React.FC = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{{ children }}</ThemeProvider>
)
