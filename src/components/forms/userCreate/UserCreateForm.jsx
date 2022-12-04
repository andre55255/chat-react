import React, { useState } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import TemplateForm from "../template/TemplateForm";
import validationSchema from "../../../validations/userCreate/userCreateSchema";
import SnackBarCustom from "../../snackBar/SnackBarCustom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { pathRoutes } from "../../../helpers/constants";
import { createUserService } from "../../../services/user/createUser";

export default function UserCreateForm() {
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const initialValues = {
        firstname: "",
        lastname: "",
        login: "",
        password: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const result = await createUserService(values);
            
            setSubmitting(false);
            setMessage(result.message);

            if (!result.success) {
                setIsError(true);
            }

            setIsSuccess(true);
            navigate(pathRoutes.homeLogin);
        } catch (err) {
            console.log(err);
            setMessage("Falha ao inesperada ao criar usuário");
            setIsError(true);
        }
    };

    return (
        <>
            <TemplateForm
                handleSubmit={handleSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
            >
                <Field
                    component={TextField}
                    label="Primeiro Nome"
                    name="firstname"
                    type="text"
                    variant="outlined"
                />
                <Field
                    component={TextField}
                    label="Sobrenome"
                    name="lastname"
                    type="text"
                    variant="outlined"
                    style={{ marginTop: ".5rem" }}
                />
                <Field
                    component={TextField}
                    label="Login"
                    name="login"
                    type="text"
                    variant="outlined"
                    style={{ marginTop: ".5rem" }}
                />
                <Field
                    component={TextField}
                    label="Senha"
                    name="password"
                    type="password"
                    variant="outlined"
                    style={{ marginTop: ".5rem" }}
                />
                {isError && (
                    <SnackBarCustom
                        message={message}
                        openSnack={isError}
                        setOpenSnack={setIsError}
                        isError={isError}
                    />
                )}
                {isSuccess && (
                    <SnackBarCustom
                        message={message}
                        openSnack={isSuccess}
                        setOpenSnack={setIsSuccess}
                        isError={isError}
                    />
                )}
            </TemplateForm>
            <Button
                onClick={() => {
                    navigate(pathRoutes.homeLogin);
                }}
            >
                Login
            </Button>
        </>
    );
}
