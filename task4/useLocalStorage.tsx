import { useEffect, useState } from "react"

function useLocalStorage(key: string, initialValue: any = null) {

    const [value, setValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            if (item) {
                const val = JSON.parse(item);
                return val;
            }
            return initialValue
        } catch (error) {
            console.error("Hook Error (useLocalStorage) : ", error);
            return initialValue
        }
    });

    useEffect(() => {
        try {
            const valueToSet = typeof value === "string" ? value : JSON.stringify(value);
            if (valueToSet == "") {
                return localStorage.removeItem(key)
            }
            localStorage.setItem(key, valueToSet)
        } catch (error) {
            console.error("Hook Error (useLocalStorage) : ", error)
        }
    }, [value])


    return [value, setValue]
}

export default useLocalStorage