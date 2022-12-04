import { endpoints } from "../../helpers/constants";
import { postRequest } from "../api/post";

export const loginService = async (data) => {
    try {
        const result = await postRequest(endpoints.login, data);
        if (!result.success) {
            return {
                success: false,
                message: result.message,
            };
        }
        return {
            success: true,
            message: result.message,
            object: {
                accessToken: result.object.accessToken,
                refreshToken: result.object.refreshToken,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Falha inesperada ao realizar login",
        };
    }
};
