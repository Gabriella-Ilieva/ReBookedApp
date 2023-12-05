import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (values) => {
        try{
            const result = await authService.login(values.email, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(-1);
        } catch(err) {
            navigate('/error500')
            console.log(err);
        }
    };

    const registerSubmitHandler = async (values) => {
        try{
            const result = await authService.register(values.username, values.email, values.imageUrl, values.country, values.city, values.phone, values.password);

            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(-1);
        } catch(err) {
            navigate('/error500')
            console.log(err);
        }
    };

    const logoutHandler = () => {
        try{
            setAuth({});
            localStorage.removeItem('accessToken');
        } catch(err) {
            navigate('/error500')
            console.log(err);
        }
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username,
        email: auth.email,
        userId: auth._id,
        imageUrl: auth.imageUrl,
        country: auth.country,
        city: auth.city,
        phone: auth.phone,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;