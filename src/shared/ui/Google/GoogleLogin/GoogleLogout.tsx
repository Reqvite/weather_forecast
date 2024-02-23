import { googleLogout } from "@react-oauth/google";

import { storageApi } from "@/shared/packages/storage/storage";
import { StorageKey } from "@/shared/types/storage";

export const GoogleLogout = () => {
    const logout = () => {
        storageApi.drop(StorageKey.USER);
        googleLogout();
    };

    return (
        <button type="button" onClick={logout}>
      Logout
        </button>
    );
};
