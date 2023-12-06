import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as booksService from '../../services/booksService';
import { MyTextInput, MySelect, MyCheckbox, MyTextarea } from '../../lib/fields';
import { addBookValidations } from '../../utils/validations'
import { genres, language } from '../../lib/bookLib';

import { Formik, Form} from 'formik';
import * as Yup from 'yup';

import { Button } from 'react-bootstrap';
import styles from './EditBook.module.css'


function EditBook() {
    const { bookId } = useParams();
    const navigate = useNavigate();

    const startValues = {
        title: '',
        author: '',
        genre: '',
        image: '',
        description: '',
        price: '',
        cover: '',
        withCause: false,
        causeUrl: '',
        causeName: '',
        condition: '',
        language: '',
        bookLocation: '',
        bookSold: false,
        ownerUsername: '',
        ownerEmail: '',
        ownerPhone: '',
    }

    const fields = Object.keys(startValues);

    const editBookSubmitHandler = (values, { setStatus, setSubmitting }) => {
        setStatus();

        booksService.edit(bookId, values)
            .then(navigate(-1))
            .catch (error => {
                navigate('/error500');
                setSubmitting(false);
                console.log(error);
            });
    }

    return (
        
            <Formik
                initialValues={ startValues }
                validationSchema={Yup.object().shape(addBookValidations)}
                onSubmit={editBookSubmitHandler}
            >
                {({ setFieldValue }) => {
                const [book, setBook] = useState({});

                useEffect(() => {
                    booksService.getOne(bookId).then(b => {
                    fields.forEach(field => setFieldValue(field, b[field], false));
                        setBook(b);
                    })}, []);

                return (
                    <div className={styles.container}>
                        <h2 className={styles.title}>EDIT BOOK</h2>
                    <Form className={styles.form}>
                    <MyTextInput
                        label="Title"
                        name="title"
                        type="text"
                        placeholder="Title *"
                    />

                    <MyTextInput
                        label="Author"
                        name="author"
                        type="text"
                        placeholder="Author *"
                    />

                    <MySelect name="genre">
                        <option value=''>Genre *</option>
                        {Object.keys(genres).map((g) => 
                            <option key={g} value={g}>{g}</option>
                        )}
                    </MySelect>

                    <MySelect name="language">
                        <option value=''>Language *</option>
                        {Object.keys(language).map((l) => 
                            <option key={l} value={l}>{l}</option>
                        )}
                    </MySelect>

                    <MySelect name="cover">
                        <option value=''>Cover type</option>
                        <option value='hardcover' >Hardcover</option>
                        <option value='softcover' >Softcover</option>
                    </MySelect>

                    <MyTextInput
                        label="Image"
                        name="image"
                        type="text"
                        placeholder="Image URL"
                    />

                    <MySelect name="condition">
                        <option value='' >Condition *</option>
                        <option value='new' >New</option>
                        <option value='as-new' >As a new</option>
                        <option value='used' >Used</option>
                    </MySelect>

                    <MyTextInput
                        label="bookLocation"
                        name="bookLocation"
                        type="text"
                        placeholder="Book location (Country, City)"
                    />

                    <MyTextInput
                        label="Price"
                        name="price"
                        type="number"
                        placeholder="Price in BGN"
                    />

                    <MyCheckbox name="withCause" label='Book with Cause' 
                        className={styles.checkbox}>
                    </MyCheckbox>

                    <MyTextInput
                        label="Cause URL"
                        name="causeUrl"
                        type="text"
                        placeholder="Cause URL **"
                    />

                    <MyTextInput
                        label="Cause Name"
                        name="causeName"
                        type="text"
                        placeholder="Cause name"
                    />

                    <MyTextarea
                        label="Description"
                        name="description"
                        type="textarea"
                        placeholder="Description"
                    />
                    <p><span>*</span> required field</p>
                    <p><span>**</span> field is required if "Book with Cause" is checked</p>
            
                    <Button variant="primary" type="submit" className={styles.submitBtn}>Submit</Button>
                    <Button variant="primary" className={styles.cancelBtn} onClick={() => navigate(-1)}>Cancel</Button>
                </Form>
                </div>
                );
                 }}
            </Formik>
    );
}

export default EditBook;