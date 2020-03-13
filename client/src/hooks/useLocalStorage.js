import {useState, useEffect} from 'react';

export const useLocalStorage = (key, defaultValue) => {
    const [state, setState] = useState(() => {
      let value
      try {
         value = JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue))
      } catch (e) {
        value = 0
      }
      return value
    })
  
    useEffect(() => {
      window.localStorage.setItem('dark-mode', state)
    }, [state])
    return [state, setState]
  }