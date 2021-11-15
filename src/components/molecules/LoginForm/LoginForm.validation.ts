import { locales } from 'locales/en';
import * as Yup from 'yup';

export const loginFormValidation = Yup.object({
    email: Yup.string()
        .email(locales.formErrors.invalidEmail)
        .required(locales.formErrors.requiredField),
    password: Yup.string().required(locales.formErrors.requiredField),
});
