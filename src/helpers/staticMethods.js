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

export const clearLocalStorage = () => {
    localStorage.clear();
}

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

export const formatDate = (date) => {
    try {
        const dateObj = new Date(date),
            day = dateObj.getDate().toString(),
            dayF = day.length === 1 ? "0" + day : day,
            month = (dateObj.getMonth() + 1).toString(),
            monthF = month.length === 1 ? "0" + month : month,
            yearF = dateObj.getFullYear();
    
        return dayF + "/" + monthF + "/" + yearF + " " + dateObj.getHours() + ":" + dateObj.getMinutes();
    } catch (err) {
        console.log(err);
        return date;
    }
};