
import { useEffect, useState } from "react"

import { storageApi } from "@/shared/packages/storage/storage"
import { StorageKey } from "@/shared/types/storage"

export const useAuth = () => {
    const [user, setUser] = useState(storageApi.get(StorageKey.USER));


    useEffect(() => {
        const handleStorage = () => {
            console.log(1)
            setUser(storageApi.get(StorageKey.USER))
        }

        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)
    }, [])


    return user
}