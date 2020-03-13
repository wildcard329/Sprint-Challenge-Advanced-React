import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = () => {
    const [dMode, setDMode] = useLocalStorage()

    useEffect(() => {
        dMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode');
    }, [dMode])

    return [dMode, setDMode]
}