import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../contexts/authContext';

import { MyTextInput } from '../../lib/fields'
import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { loginValidations } from '../../utils/validations';

import styles from './LogIn.module.css'
import Button  from 'react-bootstrap/Button';

        
const LogIn = () => {
    const { loginSubmitHandler } = useContext(AuthContext);

    return (
        <div className={styles.logInContainer}>
        <h2 className={styles.title}>Log In</h2>
        <Formik
            initialValues={{
            email: '',
            password: '',
            }}
            validationSchema={Yup.object(loginValidations)}
            onSubmit={(values, { setSubmitting }) => {
                loginSubmitHandler(values)
                setSubmitting(false);
            }}
        >
            <Form className={styles.form}>
            <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="Email"
            />
    
            <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="Password"
            />
    
            <Button variant="primary" type="submit">Submit</Button>
            <p>Don`t have an account?
                <Link to={'/register'}><b className={styles.additionalText}> Register</b></Link>
            </p>
            </Form>
        </Formik>
        </div>
    );
};

export default LogIn;