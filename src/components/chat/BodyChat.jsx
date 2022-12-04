import React from "react";
import { Box, TextField, IconButton, Stack } from "@mui/material";
import { Send } from "@mui/icons-material";

export default function BodyChat({ children, handleSentMessage, setMessage }) {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#f9fbff",
                    height: "80%",
                }}
            >
                {children}
            </Box>
            <Stack
                direction="row"
                style={{
                    backgroundColor: "#eaf5f8",
                }}
            >
                <TextField
                    variant="outlined"
                    size="small"
                    label="Mensagem"
                    fullWidth
                    onChange={e => setMessage(e.target.value)}
                />
                <IconButton color="primary" onClick={handleSentMessage}>
                    <Send />
                </IconButton>
            </Stack>
        </>
    );
}
