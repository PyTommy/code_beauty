import { Box } from '@mui/material'
import React from 'react'

import { TextField } from './TextField'

type Subs = {
  FormTextInput: typeof TextField
}
type FormProps = {
  children: React.ReactNode
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const Form: React.FC<FormProps> & Subs = ({
  children,
  onSubmit,
}: FormProps) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate>
      {children}
    </Box>
  )
}
Form.FormTextInput = TextField

export { Form }
