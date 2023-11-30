import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, {
        email,
        password,
    });

    return result;
};

export const register = (username, email, imageUrl, country, city, phone, password ) => request.post(`${baseUrl}/register`, {
    username,
    email,
    imageUrl, 
    country, 
    city,
    phone,
    password,
});

export const logout = () => request.get(`${baseUrl}/logout`);

export const userDetails = () => request.get(`${baseUrl}/me`);

export const getUser = async (userId) => {
    const result = await request.get(`${baseUrl}/${bookId}`, );

    return result;
}