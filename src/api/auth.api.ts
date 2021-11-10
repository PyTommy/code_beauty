/* eslint-disable newline-per-chained-call */
import { sleep } from '@/utils/DevUtils'
import { Email } from '@/utils/valueUtils'
import { Password } from '@/utils/valueUtils/password.utils'

interface ApiLoginProps {
  email: string
  password: string
}
interface ApiLoginResponse {
  userId: string
  username: string
  email: string
}

export const login = async ({
  email,
  password,
}: ApiLoginProps): Promise<ApiLoginResponse> => {
  Email.asserts(email)
  Password.asserts(password)
  await sleep(1000)
  if (password !== 'demodemo') {
    throw new Error('email or password is wrong')
  }
  return {
    userId: 'testtest',
    username: 'Tommy',
    email,
  }
}
