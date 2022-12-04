import React, { useState, useEffect, useRef } from "react";
import HeaderChat from "../../../components/chat/HeaderChat";
import BodyChat from "../../../components/chat/BodyChat";
import BodyMessagesChat from "../../../components/chat/BodyMessagesChat";
import { Star } from "@mui/icons-material";
import { receiveMessages, handleMessage } from "../../../services/sockets/broadcast";
import { getSocketConnection } from "../../../services/sockets/connect";
import SnackBarCustom from "../../../components/snackBar/SnackBarCustom";

export default function ChatMainPage() {
    const socketRef = useRef(null);
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [messageSnack, setMessageSnack] = useState("");
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        socketRef.current = getSocketConnection({ room: "*" });
        const res = receiveMessages(socketRef.current, setMessages);
        if (!res) {
            setMessageSnack("Falha ao buscar mensagens");
            setIsError(true);
        }
    }, []);

    const handleSentMessage = () => {
        if (!message || !message.length) {
            return;
        }
        const res = handleMessage(socketRef.current, message);
        if (!res) {
            setMessageSnack("Falha ao enviar mensagem");
            setIsError(true);
        }
    };

    return (
        <>
            <HeaderChat icon={<Star />} title="Geral" />
            <BodyChat
                handleSentMessage={handleSentMessage}
                setMessage={setMessage}
            >
                <BodyMessagesChat messages={messages} />
            </BodyChat>
            {isError && (
                <SnackBarCustom
                    message={messageSnack}
                    openSnack={isError}
                    setOpenSnack={setIsError}
                    isError={isError}
                />
            )}
        </>
    );
}
