import { AuthApi } from '@/api'

interface LoginServiceProps {
  email: string
  password: string
}

interface LoginServiceReturnValue {
  userId: string
  username: string
  email: string
}

export const login = ({
  email,
  password,
}: LoginServiceProps): Promise<LoginServiceReturnValue> => {
  return AuthApi.login({ email, password })
}
