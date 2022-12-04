import React, { useContext } from "react";
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Paper,
} from "@mui/material";
import { Star } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { userInfoContext } from "../../contexts/userInfoContext";

export default function ListContacts() {
    const { userInfo } = useContext(userInfoContext);

    return (
        <Paper
            style={{
                minHeight: "100vh",
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                style={{
                    padding: "1rem",
                }}
            >
                <Avatar
                    sx={{
                        bgcolor: "#1F6CFA",
                        marginRight: "1rem",
                    }}
                >
                    {userInfo.firstname[0]}
                </Avatar>
                {userInfo.firstname}
            </Stack>
            <Divider />
            <List
                sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                }}
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar>
                                <Star />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText>Geral</ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Paper>
    );
}
