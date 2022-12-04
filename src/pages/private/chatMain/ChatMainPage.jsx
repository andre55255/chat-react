import React, { useState, useEffect } from "react";
import HeaderChat from "../../../components/chat/HeaderChat";
import BodyChat from "../../../components/chat/BodyChat";
import BodyMessagesChat from "../../../components/chat/BodyMessagesChat";
import { Star } from "@mui/icons-material";
import { receiveMessages } from "../../../services/sockets/broadcast";

export default function ChatMainPage() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        receiveMessages(setMessages);
    }, []);

    const handleSentMessage = () => {
        console.log("SentMessage: " + message);
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
        </>
    );
}
