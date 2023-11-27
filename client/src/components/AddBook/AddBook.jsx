import { useNavigate } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import styles from '../Register/Register.module.css'

import * as booksService from '../../services/booksService';
import { useState } from 'react';

const AddBookFormKeys = {
    Title: 'title',
    Author: 'author',
    Genre: 'genre',
    Image: 'image',
    Description: 'description',
    Price: 'price',
    Cover: 'cover',
    'With Cause': 'with-cause',
    'Cause URL': 'cause-url',
    Condition: 'condition',
    
};

const genres = {
    Genre: 'genre',
    Biography: 'biography',
    Fantastic: 'fantastic',
}

const initialState = {
    title: '',
    author: '',
    genre: '',
    image: '',
    description: '',
    price: '',
    cover: '',
    'with-cause': false,
    'cause-url': '',
    condition: '',
}

export default function AddBook() {
    const[form, setForm] = useState(initialState);
    const navigate = useNavigate();

    const formHandler = (e) => {
        let value = '';
        console.log(e.target.type);

        switch (e.target.type) {
            case 'checkbox':
                value = !form[e.target.name]
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
            console.log(form)
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
                <Form.Control type="text" placeholder="Image URL" name={AddBookFormKeys.Image} value={form.image} onChange={formHandler} />
                <Form.Control type="textarea" placeholder="Description" name={AddBookFormKeys.Description} value={form.description} onChange={formHandler} />
                <Form.Check type="checkbox" label="Book with Cause" name='with-cause' onClick={formHandler}/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}