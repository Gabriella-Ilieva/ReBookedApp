import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import styles from '../Register/Register.module.css'

import * as booksService from '../../services/booksService';
import { useState } from 'react';
import { genres, language } from './DropDowns';

const AddBookFormKeys = {
    Title: 'title',
    Author: 'author',
    Genre: 'genre',
    Image: 'image',
    Description: 'description',
    Price: 'price',
    Cover: 'cover',
    'With Cause': 'withCause',
    'Cause URL': 'causeURL',
    Condition: 'condition',
    Language: 'language',
    'Book Location': 'bookLocation',
};


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
}

export default function AddBook() {
    const[form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const formHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'checkbox':
                value = !form[e.target.name]
                break;
            case 'number':
                value = Number(e.target.value)
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
        <div className={styles.registerContainer}>
            <h3 className={styles.title}>ADD BOOK</h3>
            <Form className={styles.form} onSubmit={addBookSubmitHandler}>
                <Form.Control type="text" placeholder="Title" name={AddBookFormKeys.Title} value={form.title} onChange={formHandler}/>
                <Form.Control type="text" placeholder="Author" name={AddBookFormKeys.Author} value={form.author} onChange={formHandler} />
                <Form.Select placeholder='Genre' onChange={formHandler}>
                    {Object.keys(genres).map((g) => 
                    <option key={g} name={g} value={form.genre}>{g}</option>
                    )}
                </Form.Select>
                <Form.Select placeholder='Language' onChange={formHandler}>
                    {Object.keys(language).map((l) => 
                    <option key={l} name={l} value={form.language}>{l}</option>
                    )}
                </Form.Select>
                <Form.Select onChange={formHandler}>
                    <option name={AddBookFormKeys.Cover} value={form.cover}>Cover type</option>
                    <option name={AddBookFormKeys.Cover} value={form.cover}>Hardcover</option>
                    <option name={AddBookFormKeys.Cover} value={form.cover}>Softcover</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Image URL" name={AddBookFormKeys.Image} value={form.image} onChange={formHandler} />
                <Form.Select onChange={formHandler}>
                    <option name={AddBookFormKeys.Condition} value={form.condition}>Condition</option>
                    <option name={AddBookFormKeys.Condition} value={form.condition}>New</option>
                    <option name={AddBookFormKeys.Condition} value={form.condition}>As a new</option>
                    <option name={AddBookFormKeys.Condition} value={form.condition}>Used</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Book location (country/town)" name={AddBookFormKeys['Book Location']} value={form['bookLocation']} onChange={formHandler} />
                <Form.Control type="number" placeholder="Price in BGN" name={AddBookFormKeys.Price} value={form.price} onChange={formHandler} />
                <Form.Check type="checkbox" label="Book with Cause" name='withCause' onClick={formHandler}/>
                <Form.Control className={`with-cause ${form['withCause'] ? 'active' : ''}`} type="text" placeholder="Cause URL" name={AddBookFormKeys['Cause URL']} value={form['causeURL']} onChange={formHandler} />
                <Form.Control type="textarea" placeholder="Description" name={AddBookFormKeys.Description} value={form.description} onChange={formHandler} />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}