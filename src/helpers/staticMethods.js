import { keyLocalStorage } from "./constants";

export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, value);
};

export const removeLocalStorage = (key) => {
    localStorage.removeItem(key);
};

export const getLocalStorage = (key) => {
    return localStorage.getItem(key);
};

export const buildAuthorization = () => {

    const token = getLocalStorage(keyLocalStorage.accessToken);
    if (!token) {
        throw new Error("Falha ao recuperar token de acesso");
    }

    return {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
};
