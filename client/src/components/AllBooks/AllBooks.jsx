import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';

import * as booksService from '../../services/booksService';
import BookItem from '../BookItem/BookItem';

import styles from './AllBooks.module.css'


export default function AllBooks() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        booksService.getAll()
            .then(result => setBooks(result));
    }, []);

    return(
        <div className={styles.wrapper}>
            <Container>
                <h3 className={styles.title}>ALL BOOKS</h3>
                <Row xs={2} md={3} lg={5}>
                    {books.map( (book) => (
                        <Col key={book._id}><BookItem {...book} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}