import { googleLogout } from "@react-oauth/google";

import { useAuth } from "@/shared/lib/hooks";

export const GoogleLogout = () => {
    const {setUser} = useAuth()

    const logout = () => {
        setUser()
        googleLogout();
    };

    return (
        <button type="button" onClick={logout}>
      Logout
        </button>
    );
};
