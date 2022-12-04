import React, { useContext, useState, useEffect } from "react";
import { Grid } from "@mui/material";
import ListContactsComp from "./ListContacts";
import { userInfoContext } from "../../contexts/userInfoContext";
import { useNavigate, Outlet } from "react-router-dom";
import SnackBarCustom from "../snackBar/SnackBarCustom";
import { clearLocalStorage } from "../../helpers/staticMethods";
import { pathRoutes } from "../../helpers/constants";
import { userInfoService } from "../../services/account/userInfoService";

export default function ChatTemplate() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const { setUserInfo } = useContext(userInfoContext);

    useEffect(() => {
        async function getUserInfo() {
            try {
                const result = await userInfoService();
                setMessage(result.message);
                if (!result.success) {
                    setIsError(true);
                    clearLocalStorage();
                    navigate(pathRoutes.homeLogin);
                }
                setUserInfo(result.object);
            } catch (err) {
                console.log(err);
                setMessage("Falha ao buscar informações de usuário");
                setIsError(true);
                clearLocalStorage();
                navigate(pathRoutes.homeLogin);
            }
        }
        getUserInfo();
    }, [navigate, setUserInfo]);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4} lg={2} xl={2} md={2} sm={6}>
                    <ListContactsComp />
                </Grid>
                <Grid item xs={8} lg={10} xl={10} md={10} sm={6}>
                    <Outlet />
                </Grid>
            </Grid>
            {isError && (
                <SnackBarCustom
                    message={message}
                    openSnack={isError}
                    setOpenSnack={setIsError}
                    isError={isError}
                />
            )}
        </>
    );
}
