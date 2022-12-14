import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    login: Yup.string()
        .required("Campo obrigatório")
        .min(3, "Login deve ter pelo menos 3 caracteres")
        .max(50, "Login não pode ter mais que 50 caracteres"),
    password: Yup.string()
        .required("Campo obrigatório")
        .min(3, "Login deve ter pelo menos 3 caracteres")
        .max(10, "Senha não pode ter mais que 10 caracteres"),
});

export default validationSchema;