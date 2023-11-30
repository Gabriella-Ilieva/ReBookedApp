import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import styles from '../AddBook/AddBook.module.css'

import * as booksService from '../../services/booksService';
import AuthContext from "../../contexts/authContext";
import { useState, useContext, useEffect } from 'react';
import { genres, language, bookFormKeys } from '../../lib/bookLib';


const initialState = {
    title: '',
    author: '',
    genre: '',
    image: '',
    description: '',
    price: '',
    cover: '',
    withCause: false,
    causeURL: '',
    condition: '',
    language: '',
    bookLocation: '',
    ownerUsername: '',
    ownerEmail: '',
    ownerPhone: '',
}

export default function AddBook() {
    const[form, setForm] = useState(initialState);
    const navigate = useNavigate();
    const { username, email, phone } = useContext(AuthContext)

    useEffect( () => {
        setForm(form => ({
            ...form,
            ownerUsername: username,
            ownerEmail: email,
            ownerPhone: phone,
        }))
    }, [])

    const formHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'checkbox':
                value = !form[e.target.name]
                break;
            case 'number':
                value = Number(e.target.value)
                break;
            default:
                value = e.target.value
                break;
        }

        setForm(form => ({
            ...form,
            [e.target.name]: value
        }))
    }
    
    const addBookSubmitHandler = async (e) => {
        e.preventDefault();
        
        try {
            await booksService.create(form);
            navigate('/all-books');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>ADD BOOK</h3>
            <Form className={styles.form} onSubmit={addBookSubmitHandler}>
                <Form.Control type="text" placeholder="Title" name={bookFormKeys.Title} value={form.title} onChange={formHandler}/>
                <Form.Control type="text" placeholder="Author" name={bookFormKeys.Author} value={form.author} onChange={formHandler} />
                <Form.Select type="select-one" name={bookFormKeys.Genre} onChange={formHandler} value={form.genre}>
                    {Object.keys(genres).map((g) => 
                    <option key={g} type="text" name={g} value={g}>{g}</option>
                    )}
                </Form.Select>
                <Form.Select type="select-one" name={bookFormKeys.Language} value={form.language} onChange={formHandler}>
                    {Object.keys(language).map((l) => 
                    <option key={l} value={language.l}>{l}</option>
                    )}
                </Form.Select>
                <Form.Select type="select-one" name={bookFormKeys.Cover} onChange={formHandler} value={form.cover}>
                    <option value='cover-type'>Cover type</option>
                    <option value='hardcover' >Hardcover</option>
                    <option value='softcover' >Softcover</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Image URL" name={bookFormKeys.Image} value={form.image} onChange={formHandler} />
                <Form.Select type="select-one" name={bookFormKeys.Condition} value={form.condition} onChange={formHandler}>
                    <option value='condition' >Condition</option>
                    <option value='new' >New</option>
                    <option value='as-new' >As a new</option>
                    <option value='used' >Used</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Book location (country/town)" name={bookFormKeys['Book Location']} value={form['bookLocation']} onChange={formHandler} />
                <Form.Control type="number" placeholder="Price in BGN" name={bookFormKeys.Price} value={form.price} onChange={formHandler} />
                <Form.Check type="checkbox" label="Book with Cause" name='withCause' onClick={formHandler}/>
                <Form.Control className={`with-cause ${form['withCause'] ? 'active' : ''}`} type="text" placeholder="Cause URL" name={bookFormKeys['Cause URL']} value={form['causeURL']} onChange={formHandler} />
                <Form.Control as={'textarea'} type="textarea" placeholder="Description" name={bookFormKeys.Description} value={form.description} onChange={formHandler} />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}