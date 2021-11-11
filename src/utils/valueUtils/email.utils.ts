/* eslint-disable no-unused-vars */
// =======
// 定数
// =======
const valueTitle = 'email'
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// =======
// 関数
// =======
function isValid(value: string) {
  return regex.test(value)
}
function asserts(value: string) {
  if (!isValid(value)) throw new Error(`Invalid ${valueTitle}:${value}`)
}

// =======
// クラス
// =======
class _Class {
  private value: string
  constructor(value: string) {
    asserts(value)
    this.value = value
  }
}

// =======
// ValueUtil
// =======
type InstanceCreator = (value: string) => _Class
type Compounds = {
  isValid: typeof isValid
  asserts: typeof asserts
}
const _Compounds: InstanceCreator & Compounds = (value: string) =>
  new _Class(value)
_Compounds.isValid = isValid
_Compounds.asserts = asserts

export const Email = _Compounds
