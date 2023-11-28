import { Container, Row, Col } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import * as booksService from '../../services/booksService';
import BookItem from '../BookItem/BookItem';


export default function AllBooks() {
    const [books, setBooks] = useState([]);


    useEffect(() => {
        booksService.getAll()
            .then(result => setBooks(result));
    }, []);

    return(
        <Container>
            <Row xs={2} md={3} lg={5}>
            {/* <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col>
            <Col><BookItem/></Col> */}
                {books.map( (book) => (
                    <Col key={book._id}><BookItem {...book} /></Col>
                ))}
            </Row>
        </Container>
    );
}