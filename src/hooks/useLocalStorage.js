import { useState } from 'react'

function useLocalStorage(key, initValue) {
  const [localStorageValue, setLocalStorageValue] = useState(() => getLocalStorageValue(key, initValue))

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(localStorage) : value

    setLocalStorageValue(value)
    localStorage.setItem(key, JSON.stringify(valueToStore))
  }

  return [localStorageValue, setValue]
}

function getLocalStorageValue(key, initValue) {
  const itemFromStorage = localStorage.getItem(key)

  return itemFromStorage ? JSON.parse(itemFromStorage) : initValue
}

export default useLocalStorage