import { TextField as MuiTextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { useController, UseControllerProps } from 'react-hook-form'

export const TextField = <FieldValues extends object>(props: {
  controllerProps: UseControllerProps<FieldValues>
  textFieldProps: Omit<
    TextFieldProps,
    | 'id'
    | 'onChange'
    | 'onBlur'
    | 'value'
    | 'name'
    | 'inputRef'
    | 'error'
    | 'helperText'
  > & { hintText?: string }
}) => {
  const {
    field: { onChange, onBlur, name, value, ref },
    fieldState: { error },
  } = useController({
    rules: { required: true },
    ...props.controllerProps,
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
      helperText={error?.message || props.textFieldProps.hintText}
      {...props.textFieldProps}
    />
  )
}
