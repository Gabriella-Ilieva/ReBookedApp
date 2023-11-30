import {Form, Button} from 'react-bootstrap';
import styles from './Register.module.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


const RegisterFormKeys = {
    Username: 'username',
    Email: 'email',
    ImageURL: 'imageUrl',
    Country: 'country',
    City: 'city',
    Phone: 'phone',
    Password: 'password',
    ConfirmPassword: 'confirm-password',
};

export default function RegisterUser() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.ImageURL]: '',
        [RegisterFormKeys.Country]: '',
        [RegisterFormKeys.City]: '',
        [RegisterFormKeys.Phone]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });
    return (
        <div className={styles.registerContainer}>
            <h3 className={styles.title}>REGISTER</h3>
            <Form className={styles.form} onSubmit={onSubmit}>
                <Form.Control type="text" placeholder="Username" name={RegisterFormKeys.Username} onChange={onChange} values={values[RegisterFormKeys.Username]} />
                <Form.Control type="email" placeholder="Email" name={RegisterFormKeys.Email} onChange={onChange} values={values[RegisterFormKeys.Email]} />
                <Form.Control type="text" placeholder="Image URL" name={RegisterFormKeys.ImageURL} onChange={onChange} values={values[RegisterFormKeys.ImageURL]} />
                <Form.Control type="text" placeholder="Country" name={RegisterFormKeys.Country} onChange={onChange} values={values[RegisterFormKeys.Country]} />
                <Form.Control type="text" placeholder="City" name={RegisterFormKeys.City} onChange={onChange} values={values[RegisterFormKeys.City]} />
                <Form.Control type="text" placeholder="Phone number - 0888888888" name={RegisterFormKeys.Phone} onChange={onChange} values={values[RegisterFormKeys.Phone]} />
                <Form.Control type="password" placeholder="Password" name={RegisterFormKeys.Password} onChange={onChange} values={values[RegisterFormKeys.Password]} />
                <Form.Control type="password" placeholder="Confirm Password" name={RegisterFormKeys.ConfirmPassword} onChange={onChange} values={values[RegisterFormKeys.ConfirmPassword]} />
                <Button variant="primary" type="submit"> Submit </Button>
            </Form>
            <p className={styles.additionalText}>Already have an account? 
                <Link to={'/login'}><b> Log In</b></Link>
            </p>
        </div>
    );
};