import React from "react";
import { Avatar, Divider, Stack } from "@mui/material";

export default function HeaderChat({ icon, title }) {
    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                style={{
                    padding: "1rem 0",
                }}
            >
                <Avatar
                    sx={{
                        marginRight: "1rem",
                    }}
                >
                    {icon}
                </Avatar>   
                {title}
            </Stack>
            <Divider />
        </>
    );
}
