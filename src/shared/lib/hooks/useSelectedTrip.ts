import { Trip } from "@/shared/types/entities";
import { StorageKey } from "@/shared/types/storage";

import { useLocalStorage } from "./useLocalStorage";


export const useSelectedTrip = (defaultList: Trip[]) => {
    const defaultValue = JSON.parse(
        localStorage.getItem(StorageKey.SELECTED_TRIP) ?? "null"
    );
    const [selectedCard, setSelectedCard] = useLocalStorage(StorageKey.SELECTED_TRIP, defaultValue || defaultList[0])

    return {selectedCard, setSelectedCard}
}