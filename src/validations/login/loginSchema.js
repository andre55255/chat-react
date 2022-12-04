import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    login: Yup.string()
        .required("Campo obrigatório")
        .min(3, "Login deve ter pelo menos 3 caracteres")
        .max(20, "Login não pode ter mais que 20 caracteres"),
    password: Yup.string()
        .required("Campo obrigatório")
        .min(3, "Login deve ter pelo menos 3 caracteres")
        .max(20, "Senha não pode ter mais que 20 caracteres"),
});

export default validationSchema;