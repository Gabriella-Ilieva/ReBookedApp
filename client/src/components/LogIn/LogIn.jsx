import { Form, Button } from 'react-bootstrap';
import { useContext } from 'react';
import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';
import styles from './LogIn.module.css'
import { Link } from 'react-router-dom';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

function LogIn() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    });

    return (
        <div className={styles.logInContainer}>
            <h3 className={styles.title}>Log In</h3>
            <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Control type="email" placeholder="Email" name={LoginFormKeys.Email} onChange={onChange} value={values[LoginFormKeys.Email]} />
                <Form.Control type="password" placeholder="Password" name={LoginFormKeys.Password}onChange={onChange} value={values[LoginFormKeys.Password]} />
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
            <p>Don`t have an account?
                <Link to={'/register'}> Register</Link>
            </p>
        </div>
    );
}

export default LogIn;