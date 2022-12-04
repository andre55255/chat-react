import { io } from "socket.io-client";
import { getLocalStorage } from "../../helpers/staticMethods";
import { keyLocalStorage } from "../../helpers/constants";

const baseUrl = process.env.REACT_APP_URL_WS || "";
const token = getLocalStorage(keyLocalStorage.accessToken);

export const getSocketConnection = (headersAdd = {}) => {

    const socket = io(baseUrl, {
        extraHeaders: {
            ...headersAdd,
            token,
        },
    });
    socket.connect();

    return socket;
};
