import { useEffect, useState } from "react"


function useOnlineStatus() {
    console.log("rendering again");
    const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine)

    useEffect(() => {
        const doOnline = () => setIsOnline(true)
        const doOffline = () => setIsOnline(false)

        window.addEventListener('online', doOnline)
        window.addEventListener('offline', doOffline)

        return () => {
            window.removeEventListener('online', doOnline)
            window.removeEventListener('offline', doOffline)
        }
    }, [])

    return isOnline;
}

export default useOnlineStatus