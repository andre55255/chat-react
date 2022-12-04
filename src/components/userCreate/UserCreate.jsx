import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import userImg from "../../assets/user.png";
import UserCreateForm from "../forms/userCreate/UserCreateForm";

export default function UserCreate() {
    return (
        <Container
            fluid={true}
            maxWidth="sm"
            style={{ backgroundColor: "#f2f6fa" }}
        >
            <Stack
                marginY="1rem"
                padding="1rem"
                spacing={2}
                alignItems="center"
            >
                <img src={userImg} alt="imagem usuário" loading="lazy" />
                <Typography variant="button" display="block">
                    Criar usuário
                </Typography>
                <UserCreateForm />
            </Stack>
        </Container>
    );
}
