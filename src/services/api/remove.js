import api from "./configApi";
import { refreshService } from "../account/refreshService";

export const deleteRequest = async (path, authorization = {}, isRecursive = false) => {
    let response = {
        success: false,
        message: "",
        object: {},
        statusCode: 0
    };
    try {
        await api
            .delete(path, authorization)
            .then((result) => {
                response.success = result.data.success;
                response.message = result.data.message;
                response.object = result.data.object;
                response.statusCode = result.data.statusCode;
            })
            .catch(async (err) => {
                if (err.response) {
                    switch (err.response.status) {
                        case 400:
                            response.message = err.response.data.message;
                            response.statusCode = 400;
                            break;
                        case 401:
                            if (!isRecursive) {
                                const resultRefresh = await refreshService();
                                if (resultRefresh) {
                                    return await deleteRequest(path, authorization, true);
                                }
                            }
                            response.message = "Acesso negado";
                            response.statusCode = 401;
                            break;
                        case 409:
                            response.message = err.response.data.message;
                            response.statusCode = 409;
                            break;
                        case 500:
                            response.message = err.response.data.message;
                            response.statusCode = 500;
                            break;
                        default:
                            response.message = "Falha inesperada";
                            response.statusCode = err.response.statusCode;
                    }
                } else {
                    response.message =
                        "Ops, falha inesperada em nosso sistema. Desculpe-nos pelo transtorno";
                    response.statusCode = 500;
                }
            });
        return response;
    } catch (err) {
        response.statusCode = 500;
        response.success = false;
        response.message = "Ops, falha inesperada em nosso sistema. Desculpe-nos pelo transtorno";
        return response;
    }
};