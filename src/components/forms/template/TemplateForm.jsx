import React from "react";
import { Formik, Form } from "formik";
import { Button, LinearProgress, Stack } from "@mui/material";

export default function TemplateForm({
    initialValues,
    handleSubmit,
    validationSchema,
    children,
}) {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            {({ submitForm, isSubmitting }) => (
                <Form style={{ width: "80%", padding: "1rem" }}>
                    <Stack width="100%">
                        {children}
                        <Button
                            color="primary"
                            disabled={isSubmitting}
                            disableElevation
                            onClick={submitForm}
                            variant="contained"
                            style={{ marginTop: ".8rem" }}
                        >
                            Enviar
                        </Button>
                        {isSubmitting && <LinearProgress color="secondary" />}
                    </Stack>
                </Form>
            )}
        </Formik>
    );
}
