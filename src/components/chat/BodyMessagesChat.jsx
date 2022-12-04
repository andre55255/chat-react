import React from "react";
import { List, Stack } from "@mui/material";
import MessageChat from "./MessageChat";

export default function BodyMessagesChat({ messages }) {

    const loadMessages = () => {
        return messages.map((msg) => {
            return (
                <MessageChat 
                    key={msg.id}
                    message={msg.message}
                    userDest={msg.userDest}
                    userSend={msg.userSend}
                    createdAt={msg.createdAt}
                />
            );
        });
    }

    return (
        <Stack
            direction="column"
            sx={{
                minHeight: "100%",
                overflowY: "scroll",
            }}
        >
            <List
                sx={{
                    width: "100%",
                }}
            >
                {loadMessages()}
            </List>
        </Stack>
    );
}
