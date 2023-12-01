import { useNavigate, useParams } from 'react-router-dom';

import * as booksService from '../../services/booksService';
import { useState, useEffect } from 'react';
import { genres, language, bookFormKeys } from '../../lib/bookLib';

import {Form, Button} from 'react-bootstrap';
import styles from '../Register/Register.module.css'


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
    const { bookId } = useParams();
    const[book, setBook] = useState(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        booksService.getOne(bookId)
            .then(result => {
                setBook(result);
            });
    }, [bookId]);

    const bookHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'checkbox':
                value = !book[e.target.name]
                break;
            case 'number':
                value = Number(e.target.value)
                break;
            default:
                value = e.target.value
                break;
        }

        setBook(book => ({
            ...book,
            [e.target.name]: value
        }))
    }
    
    const editBookSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            await booksService.edit(bookId, book);
            navigate('/all-books');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <div className={styles.registerContainer}>
            <h3 className={styles.title}>ADD BOOK</h3>
            <Form className={styles.form} onSubmit={editBookSubmitHandler}>
                <Form.Control type="text" placeholder="Title" name={bookFormKeys.Title} value={book.title} onChange={bookHandler}/>
                <Form.Control type="text" placeholder="Author" name={bookFormKeys.Author} value={book.author} onChange={bookHandler} />
                <Form.Select type="select-one" name={bookFormKeys.Genre} onChange={bookHandler} value={book.genre}>
                    {Object.keys(genres).map((g) => 
                    <option key={g} type="text" name={g} value={g}>{g}</option>
                    )}
                </Form.Select>
                <Form.Select type="select-one" name={bookFormKeys.Language} value={book.language} onChange={bookHandler}>
                    {Object.keys(language).map((l) => 
                    <option key={l} value={language.l}>{l}</option>
                    )}
                </Form.Select>
                <Form.Select type="select-one" name={bookFormKeys.Cover} onChange={bookHandler} value={book.cover}>
                    <option value='Cover Type'>Cover type</option>
                    <option value='Hardcover' >Hardcover</option>
                    <option value='Softcover' >Softcover</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Image URL" name={bookFormKeys.Image} value={book.image} onChange={bookHandler} />
                <Form.Select type="select-one" name={bookFormKeys.Condition} value={book.condition} onChange={bookHandler}>
                    <option value='Condition' >Condition</option>
                    <option value='New' >New</option>
                    <option value='As new' >As new</option>
                    <option value='Used' >Used</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Book location (country/town)" name={bookFormKeys['Book Location']} value={book['bookLocation']} onChange={bookHandler} />
                <Form.Control type="number" placeholder="Price in BGN" name={bookFormKeys.Price} value={book.price} onChange={bookHandler} />
                <Form.Check type="checkbox" label="Book with Cause" name='withCause' onClick={bookHandler}/>
                <Form.Control className={`with-cause ${book['withCause'] ? 'active' : ''}`} type="text" placeholder="Cause URL" name={bookFormKeys['Cause URL']} value={book['causeURL']} onChange={bookHandler} />
                <Form.Control type="textarea" placeholder="Description" name={bookFormKeys.Description} value={book.description} onChange={bookHandler} />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}