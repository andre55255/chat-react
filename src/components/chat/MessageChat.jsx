import React from "react";
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from "@mui/material";
import { formatDate } from "../../helpers/staticMethods";

export default function MessageChat({
    message,
    userSend,
    userDest,
    createdAt,
}) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar />
            </ListItemAvatar>
            <ListItemText
                primary={userSend}
                secondary={
                    <>
                        <Typography
                            sx={{ display: "inline" }}
                            component="span"
                            variant="subtitle2"
                            color="text.primary"
                        >
                            {formatDate(createdAt)}
                        </Typography>
                        : {message}
                    </>
                }
            />
        </ListItem>
    );
}
