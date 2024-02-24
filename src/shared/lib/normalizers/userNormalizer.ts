import { User } from "@/shared/types/user";

export function userNormalizer(data:User) {
    const normalizedData = {
        picture: data.picture,
        name: data.name,
        email: data.email,
    };
    return normalizedData;
}