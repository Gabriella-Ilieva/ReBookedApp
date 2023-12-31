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
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "The value should match the Password field value")
        .required('Required'),
};

export const loginValidations={
    password: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
};

export const addBookValidations={
    imageUrl: Yup.string()
        .url('The URL is not valid'),
    withCause: Yup.boolean(),
    causeUrl: Yup.string()
        .url('The URL is not valid'),
    causeName: Yup.string()
        .min(2, 'Name should be at least 2 characters'),
    title: Yup.string()
        .min(2, 'Title should be at least 2 characters')
        .required('Required'),
    author: Yup.string()
        .min(2, 'Author name should be at least 2 characters')
        .required('Required'),
    genre: Yup.string()
        .required('Required'),
    language: Yup.string()
        .required('Required'),
    condition: Yup.string()
        .required('Required'),
    price: Yup.number()
        .min(0, 'Price should be a positive number'),
    description: Yup.string()
        .max(900, 'Description should not be more than 900 characters'),
};

export const commentValidations={
    comment: Yup.string()
        .max(200, 'Comment should not be more than 200 characters')
        .required('Required'),
};