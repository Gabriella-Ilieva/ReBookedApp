import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import { MyTextInput } from '../../lib/fields';
import { registerValidations } from '../../utils/validations'
import { Formik, Form} from 'formik';
import * as Yup from 'yup';

import Button from 'react-bootstrap/Button';
import styles from './Register.module.css'



const RegisterUser = () => {
    const { registerSubmitHandler } = useContext(AuthContext);

    return (
        <div className={styles.registerContainer}>
            <h2 className={styles.title}>REGISTER</h2>
            <Formik
                initialValues={{
                    username: '',
                    email: '',
                    imageUrl: '',
                    country: '',
                    city: '',
                    phone: '',
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={Yup.object(registerValidations)}
                onSubmit={(values, { setSubmitting }) => {
                    registerSubmitHandler(values)
                    setSubmitting(false);
                }}
            >
                <Form className={styles.form}>
                    <MyTextInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Username"
                    />

                    <MyTextInput
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Email"
                    />

                    <MyTextInput
                        label="Image URL"
                        name="imageUrl"
                        type="text"
                        placeholder="Image URL"
                    />

                    <MyTextInput
                        label="Country"
                        name="country"
                        type="text"
                        placeholder="Country"
                    />

                    <MyTextInput
                        label="City"
                        name="city"
                        type="text"
                        placeholder="City"
                    />

                    <MyTextInput
                        label="Phone number"
                        name="phone"
                        type="tel"
                        placeholder="Phone number - 0888111111"
                    />
            
                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Password"
                    />

                    <MyTextInput
                        label="Confirm password"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                    />
            
                    <Button variant="primary" type="submit">Submit</Button>
                    <p className={styles.additionalText}>Already have an account? 
                        <Link to={'/login'}><b> Log In</b></Link>
                    </p>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterUser