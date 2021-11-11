type LocalStorageKey = 'token'

export const getItem = (key: LocalStorageKey) =>
  window.localStorage.getItem(key)
export const setItem = (key: LocalStorageKey, value: string) =>
  window.localStorage.setItem(key, value)
export const removeItem = (key: LocalStorageKey) =>
  window.localStorage.removeItem(key)
export const clearAll = () => window.localStorage.clear()
