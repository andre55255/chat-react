import React, { useState } from "react";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import TemplateForm from "../template/TemplateForm";
import validationSchema from "../../../validations/login/loginSchema";
import SnackBarCustom from "../../snackBar/SnackBarCustom";
import { loginService } from "../../../services/account/loginService";

export default function LoginForm() {
    const [message, setMessage] = useState("");
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const initialValues = {
        login: "",
        password: "",
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const result = await loginService(values);

            setSubmitting(false);
            setMessage(result.message);
            
            if (!result.success) {
                setIsError(true);
            }
            setIsSuccess(true)
        } catch (err) {
            console.log(err);
            setMessage("Falha ao inesperada ao realizar requisição de login");
            setIsError(true);
        }
    };

    return (
        <TemplateForm
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            <Field
                component={TextField}
                label="Login"
                name="login"
                type="text"
                variant="outlined"
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
    );
}
