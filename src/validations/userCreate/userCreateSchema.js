import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstname: Yup.string()
        .required("Campos obrigatório")
        .min(3, "Primeiro nome deve ter pelo menos 3 caracteres")
        .max(100, "Primeiro nome deve ter no máximo 100 caracteres"),
    lastname: Yup.string()
        .required("Campo obrigatório")
        .min(3, "Sobrenome nome deve ter pelo menos 3 caracteres")
        .max(100, "Sobrenome nome deve ter no máximo 100 caracteres"),
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