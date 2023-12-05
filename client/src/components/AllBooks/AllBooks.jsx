import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import { Formik, Form} from 'formik';

import * as booksService from '../../services/booksService';
import { MyTextInput, MySelect, MyCheckbox } from '../../lib/fields';
import BookItem from '../BookItem/BookItem';
import { genres, language } from '../../lib/bookLib';

import { Button } from 'react-bootstrap';
import styles from './AllBooks.module.css'


export default function AllBooks() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        try {
            booksService.getAll()
                .then(result => setBooks(result));
        } catch (err) {
            navigate('/error500')
            console.log(err);
        }
    }, []);

    const filterBooksSubmitHandler = async (values) => {
        let whereClause = [];
        let {withCause, price, ...others} = values;
    
        let othersClause = Object.entries(others).filter(([key, value]) => value !== '')
        .map(([key, value]) => `${key}%3D%22${value}%22`)
        .join('&');
        othersClause = (othersClause ? othersClause : null);
        let causeClause = (withCause ? 'withCause%3Dtrue' : null);
        let priceClause = (price ? `price<=${price}` : null);
        whereClause = [othersClause, causeClause, priceClause].filter(str => str !== null).join('&');
        whereClause = (whereClause? '?where='+whereClause : '')

        try {
            await booksService.filter(whereClause)
                .then(result => setBooks(result)); 
        } catch (err) {
            navigate('/error500')
            console.log(err);
        }
    }

    return(
        <>
        <div className={styles.wrapper}>
            <Accordion className={styles.accordion}>
                <Accordion.Item className={styles.accordionItem} eventKey="0">
                    <Accordion.Header>Filters</Accordion.Header>
                    <Accordion.Body>
                    <div className={styles.container}>
                        <Formik
                            initialValues={{
                                title: '',
                                author: '',
                                genre: '',
                                price: '',
                                cover: '',
                                withCause: '',
                                condition: '',
                                language: '',
                            }}
                            onSubmit={(values, { setSubmitting }) => {
                                filterBooksSubmitHandler(values)
                                setSubmitting(false);
                            }}
                        >
                            {({ dirty, resetForm }) => {
                        return (
                            <Form className={styles.formContainer}>
                                <Container>
                                    <Row className={styles.row}>
                                        <Col lg={4} md={5}><MyTextInput
                                            label="Title"
                                            name="title"
                                            type="text"
                                            placeholder="Title"
                                        /></Col>
                                        <Col lg={4} md={5} xs={7}><MyTextInput
                                            label="Author"
                                            name="author"
                                            type="text"
                                            placeholder="Author"
                                        /></Col>
                                        <Col 
                                            lg={{ span: 2, offset: 1 }}
                                            md={{ span: 2 }}
                                            xs={{ span: 5 }}
                                            ><MyTextInput
                                            label="Price"
                                            name="price"
                                            type="number"
                                            placeholder="Max price in BGN"
                                            className={styles.price}
                                        /></Col>
                                    </Row>
                                    <Row xs={2} md={4} lg={6} className={styles.row}>
                                        <Col><MySelect name="condition" className={styles.condition}>
                                            <option value='' >Condition *</option>
                                            <option value='new' >New</option>
                                            <option value='as-new' >As a new</option>
                                            <option value='used' >Used</option>
                                        </MySelect></Col>
                                        <Col><MySelect name="genre">
                                            <option value=''>Genre</option>
                                            {Object.keys(genres).map((g) => 
                                                <option key={g} value={g}>{g}</option>
                                            )}
                                        </MySelect></Col>
                                        <Col><MySelect name="language">
                                            <option value=''>Language</option>
                                            {Object.keys(language).map((l) => 
                                                <option key={l} value={l}>{l}</option>
                                            )}
                                        </MySelect></Col>
                                        <Col><MySelect name="cover">
                                            <option value=''>Cover type</option>
                                            <option value='hardcover' >Hardcover</option>
                                            <option value='softcover' >Softcover</option>
                                        </MySelect></Col>
                                        <Col lg={{ span: 2, offset: 1 }}><MyCheckbox name="withCause" label='Book with Cause' 
                                            className={styles.checkbox}>
                                        </MyCheckbox></Col>
                                    </Row>
                                </Container>
                                <div className={styles.buttonContainer}>
                                    <Button variant="primary" type="submit" className={styles.button}>Submit</Button>
                                    <Button variant="primary" type="reset" disabled={!dirty} onClick={() => {
                                        resetForm();
                                        booksService.getAll()
                                            .then(result => setBooks(result));
                                        }} className={styles.button}>Reset</Button>
                                </div>
                            </Form>
                                );
                            }}
                        </Formik>
                    </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Container>
                
                { books == '' && <h3 className={styles.noBooks}>THERE ARE NO BOOKS!</h3>}
                { books != '' && <h3 className={styles.title}>ALL BOOKS</h3>}
                <Row xs={2} md={3} lg={5}>
                    {books.map( (book) => (
                        <Col key={book._id}><BookItem {...book} /></Col>
                    ))}
                </Row>
            </Container>
        </div>
        </>
    );
}