import React, { FC } from 'react';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { FormikProps, useFormik } from 'formik';
import { ILogin } from 'shared/interface/login.interface';
import { loginFormValidation } from 'components/molecules/LoginForm/LoginForm.validation';
import { useDispatch } from 'react-redux';
import { login } from 'actions/auth/auth.actions';
import { locales } from 'locales/en';

const LoginForm: FC = () => {
    const dispatch = useDispatch();
    const { values, handleSubmit, handleChange, errors, handleBlur, touched }: FormikProps<ILogin> =
        useFormik<ILogin>({
            initialValues: {
                email: '',
                password: '',
            },
            validationSchema: loginFormValidation,
            onSubmit: (params) => {
                dispatch(login(params));
            },
        });

    return (
        <div className="shadow-md rounded-3xl py-20 px-6 w-auto bg-white max-w-2xl w-full mx-6">
            <h1 className="font-bold text-center uppercase text-5xl mb-3">{locales.label.login}</h1>
            <p className="text-gray-500 mb-10 text-center">admin@admin.com / admin123</p>
            <form onSubmit={handleSubmit} className="grid gap-10">
                <Input
                    name="email"
                    type="email"
                    placeholder={locales.label.email}
                    error={errors?.email}
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    touched={touched?.email}
                />
                <Input
                    name="password"
                    type="password"
                    placeholder={locales.label.password}
                    error={errors?.password}
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    touched={touched?.password}
                />
                <div className="w-full flex flex-wrap justify-end items-center">
                    <Button type="submit" disabled={false}>
                        {locales.label.login}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
