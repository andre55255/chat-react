import { eventsWebSocket } from "../../helpers/constants";

export const receiveMessages = (io, setMessages, isRecursive = false) => {
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
        return true;
    } catch (err) {
        console.log(err);
        if (!isRecursive) {
            const res = receiveMessages(setMessages, true);
            return res;
        }
        return false;
    }
};

export const handleMessage = (io, message, isRecursive = false) => {
    try {
        io.emit(eventsWebSocket.sendMessageBroadcast, { message });

        return true;
    } catch (err) {
        console.log(err);
        if (!isRecursive) {
            const res = handleMessage(message, true);
            return res;
        }
        return false;
    }
};
