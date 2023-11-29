import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import * as booksService from '../../services/booksService';
import BookItem from '../BookItem/BookItem';
import styles from './UsersBooks.module.css'


function UsersBooks() {
    const [books, setBooks] = useState([]);
    const { userId } = useContext(AuthContext)


    useEffect(() => {
        booksService.getUsersBooks(userId)
            .then(result => setBooks(result));
    }, [userId]);

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

export default UsersBooks