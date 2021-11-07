import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { SignInForm } from '@/components/organisms/authentication/SignInForm'

export default {
  title: 'organisms/authentication/SignInForm',
  component: SignInForm,
  argTypes: {},
} as ComponentMeta<typeof SignInForm>

const Template: ComponentStory<typeof SignInForm> = (args) => (
  <SignInForm {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  user: {},
}
