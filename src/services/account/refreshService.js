import { postRequest } from "../api/post";
import { endpoints, keyLocalStorage } from "../../helpers/constants";
import {
    getLocalStorage,
    setLocalStorage,
    buildAuthorization,
} from "../../helpers/staticMethods";

export const refreshService = async () => {
    try {
        const refreshToken = getLocalStorage(keyLocalStorage.refreshToken);
        const data = {
            refreshToken: refreshToken,
        };
        const result = await postRequest(
            endpoints.refresh,
            data,
            buildAuthorization()
        );
        if (!result.success) {
            return {
                success: false,
                message: result.message,
            };
        }
        setLocalStorage(keyLocalStorage.accessToken, result.object.accessToken);
        setLocalStorage(
            keyLocalStorage.refreshToken,
            result.object.refreshToken
        );
        return {
            success: true,
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Falha inesperada ao realizar refresh token",
        };
    }
};
