import Form from 'react-bootstrap/Form';
import styles from './Register.module.css'
import { Link } from 'react-router-dom';

function RegisterUser() {
return (
    <div className={styles.registerContainer}>
        <h3 className={styles.title}>REGISTER</h3>
        <Form className={styles.form}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Form>
        <p className={styles.additionalText}>Already have an account? 
            <Link to={'/login'}><b>Log In</b></Link>
        </p>
    </div>
);
}

export default RegisterUser;