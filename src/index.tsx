import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import { FormTextInput } from '@molecules/FormTextInput'

ReactDOM.render(
  <>
    <h1>Hello React!</h1>
    <FormTextInput></FormTextInput>
  </>,
  document.getElementById('root'),
)
