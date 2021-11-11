/* eslint-disable no-unused-vars */
// =======
// 定数
// =======
const valueTitle = 'password'
const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

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

export const Password = _Compounds
