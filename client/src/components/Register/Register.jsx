import {Form, Button} from 'react-bootstrap';
import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function RegisterUser() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    return (
        <div className={styles.registerContainer}>
            <h3 className={styles.title}>REGISTER</h3>
            <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formGroupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Username" name='username' onChange={onChange}
                        values={values[RegisterFormKeys.Username]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={onChange}
                        values={values[RegisterFormKeys.Email]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' onChange={onChange}
                        values={values[RegisterFormKeys.Password]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='confirm-password' onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className={styles.additionalText}>Already have an account? 
                <Link to={'/login'}><b>Log In</b></Link>
            </p>
        </div>
    );
};