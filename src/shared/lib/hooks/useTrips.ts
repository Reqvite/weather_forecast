import { StorageKey } from "@/shared/types/storage";

import { useLocalStorage } from ".";

export const useTrips = () => {
    const defaultValue = JSON.parse(
        localStorage.getItem(StorageKey.TRIPS) ?? "null"
    );
    const [storageTrips, setStorageTrips] = useLocalStorage(StorageKey.TRIPS, defaultValue); 


    return {storageTrips, setStorageTrips}
}