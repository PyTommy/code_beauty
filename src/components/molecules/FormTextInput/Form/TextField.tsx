import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

type TextFieldProps<FieldValues> = Pick<
  MuiTextFieldProps,
  | 'style'
  | 'name'
  | 'label'
  | 'autoComplete'
  | 'placeholder'
  | 'autoFocus'
  | 'fullWidth'
> & {
  hintText?: string
} & UseControllerProps<FieldValues>

export const TextField = <FieldValues extends object>({
  rules,
  name,
  shouldUnregister,
  defaultValue,
  control,
  ...textFieldProps
}: TextFieldProps<FieldValues>) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    rules,
    name,
    shouldUnregister,
    defaultValue,
    control,
  })

  return (
    <MuiTextField
      margin="normal"
      id={name}
      onChange={onChange} // send value to hook form
      onBlur={onBlur} // notify when input is touched/blur
      value={value} // input value
      name={name} // send down the input name
      inputRef={ref} // send input ref, so we can focus on input when error appear
      error={!!error}
      helperText={error?.message || textFieldProps.hintText}
      {...textFieldProps}
    />
  )
}
