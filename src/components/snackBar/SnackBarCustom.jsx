import React from "react";
import { Snackbar, Alert } from "@mui/material";

export default function SnackBarCustom({ openSnack, setOpenSnack, isError, message }) {

    const handleClose = (evt, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenSnack(false);
    }

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={openSnack}
            autoHideDuration={5000}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={isError ? "error" : "success"}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
