import { endpoints } from "../../helpers/constants";
import { postRequest } from "../api/post";

export const createUserService = async (data) => {
    try {
        const result = await postRequest(endpoints.createUser, data);
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
                id: result.object._id,
                firstname: result.object.firstname,
                lastname: result.object.lastname,
                login: result.object.login,
            },
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Falha inesperada ao criar usuário",
        };
    }
};
