import Form from 'react-bootstrap/Form';
import styles from './LogIn.module.css'
import { Link } from 'react-router-dom';

function LogIn() {
return (
    <div className={styles.logInContainer}>
        <h3 className={styles.title}>Log In</h3>
        <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form>
        <p>Don`t have an account?
            <Link to={'/register'}>Register</Link>
        </p>
    </div>
);
}

export default LogIn;