/* eslint-disable no-unused-vars */
const valueTitle = 'password'
const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

function isValid(value: string) {
  return regex.test(value)
}
function asserts(value: string) {
  if (!isValid(value)) throw new Error(`Invalid ${valueTitle}:${value}`)
}

class _Class {
  #value: string
  constructor(value: string) {
    asserts(value)
    this.#value = value
  }
}

type InstanceCreator = (value: string) => _Class
type Compounds = {
  isValid: typeof isValid
  asserts: typeof asserts
}

const _Instance: InstanceCreator & Compounds = (value: string) =>
  new _Class(value)
_Instance.isValid = isValid
_Instance.asserts = asserts

export const Password = _Instance
