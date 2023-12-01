import * as Yup from 'yup';

export const registerValidations={
    imageUrl: Yup.string()
        .url('The URL is not valid'),
    username: Yup.string()
        .max(20, 'Username should not be more than 20 characters')
        .min(4, 'Username should be at least 4 characters')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Password should be at least 6 characters')
        .max(15, 'Username should not be more than 15 characters')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
};

export const loginValidations={
    password: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
};