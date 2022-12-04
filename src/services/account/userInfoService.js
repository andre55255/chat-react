import { getRequest } from "../api/get";
import { endpoints } from "../../helpers/constants";
import { buildAuthorization } from "../../helpers/staticMethods";

export const userInfoService = async () => {
    try {
        const result = await getRequest(
            endpoints.userInfo,
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
            object: result.object,
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Falha inesperada ao pegar informações de usuário",
        };
    }
};
