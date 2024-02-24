
import { StorageKey } from "@/shared/types/storage";
import { User } from "@/shared/types/user";

import { userNormalizer } from "../normalizers";
import { useLocalStorage } from "./";


export const useAuth = () => {
    const defaultValue = JSON.parse(localStorage.getItem(StorageKey.USER) ?? 'null');
    const [user, updateUser] = useLocalStorage<User | null>(StorageKey.USER, defaultValue)

    const setUser = (user?: User) => {
        if (!user) {
            updateUser(null)   
            return
        }
        const updatedUser = userNormalizer(user)
        updateUser(updatedUser)
    }

    const isAuth = user?.email

    return {user, isAuth, setUser};
};