import { googleLogout } from "@react-oauth/google";

import { useAuth } from "@/shared/lib/hooks";

import { Button } from "../Button/Button";

export const GoogleLogout = () => {
    const {setUser} = useAuth()

    const logout = () => {
        setUser()
        googleLogout();
    };

    return (
        <Button type="button" onClick={logout}>
      Logout
        </Button>
    );
};
