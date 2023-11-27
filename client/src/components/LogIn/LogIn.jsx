import { Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import styles from './LogIn.module.css'
import { Link } from 'react-router-dom';

const LoginFormKyes = {
    Email: 'email',
    Password: 'password',
};

function LogIn() {

    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKyes.Email]: '',
        [LoginFormKyes.Password]: '',
    });

    return (
        <div className={styles.logInContainer}>
            <h3 className={styles.title}>Log In</h3>
            <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name={LoginFormKyes.Email} onChange={onChange} value={values[LoginFormKyes.Email]} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name={LoginFormKyes.Password}onChange={onChange} value={values[LoginFormKyes.Password]} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don`t have an account?
                <Link to={'/register'}>Register</Link>
            </p>
        </div>
    );
}

export default LogIn;