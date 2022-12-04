import { getSocketConnection } from "./connect";
import { eventsWebSocket } from "../../helpers/constants";

export const receiveMessages = (setMessages, isRecursive = false) => {
    const io = getSocketConnection({ room: "*" });
    try {
        io.on(eventsWebSocket.previousMessageBroadcast, (response) => {
            const messages = response.map((item) => {
                return {
                    id: item.id,
                    message: item.message,
                    userSend: item.userSend,
                    userDest: item.userDest,
                    createdAt: item.createdAt,
                };
            });

            setMessages(messages);
        });
    } catch (err) {
        console.log(err);
        if (!isRecursive) {
            const res = receiveMessages(io, true);
            return res;
        }
        return {
            success: false,
            message: "Falha inpesperada ao recuperar mensagens broadcast",
        };
    }
};
