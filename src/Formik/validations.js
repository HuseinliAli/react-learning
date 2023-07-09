import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin.")
    .required("E-posta alanı zorunludur."),
  password: yup.string().required("Şifre alanı zorunludur."),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifreler uyuşmuyor.")
    .required("Şifre doğrulama alanı zorunludur."),
});

export default validationSchema;
