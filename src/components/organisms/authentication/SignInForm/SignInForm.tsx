import { yupResolver } from '@hookform/resolvers/yup'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Form } from '@/components/molecules/FormTextInput/Form'

const SignInFormSchema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(8),
})
type SignInFormSchema = yup.InferType<typeof SignInFormSchema>

interface SignInFormProps {}
// eslint-disable-next-line
export function SignInForm(props: SignInFormProps) {
  const { handleSubmit, control } = useForm<SignInFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: yupResolver(SignInFormSchema),
  })
  const onSubmit = (data: SignInFormSchema) => {
    console.log({
      email: data.email,
      password: data.password,
    })
  }

  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.TextField
            control={control}
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Form.TextField
            control={control}
            fullWidth
            label="Password"
            name="password"
            autoComplete="password"
          />
          <Button type="submit" fullWidth variant="contained">
            Sign In
          </Button>
        </Form>
      </Box>
    </Container>
  )
}
