import { postRequest } from "../api/post";
import { endpoints, keyLocalStorage } from "../../helpers/constants";
import {
    getLocalStorage,
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
        return {
            success: true,
            message: result.message,
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Falha inesperada ao realizar refresh token",
        };
    }
};
