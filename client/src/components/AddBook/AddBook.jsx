import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { Formik, Form} from 'formik';
import * as Yup from 'yup';

import AuthContext from "../../contexts/authContext";
import * as booksService from '../../services/booksService';
import { MyTextInput, MySelect, MyCheckbox, MyTextarea } from '../../lib/fields';
import { addBookValidations } from '../../utils/validations'
import { genres, language } from '../../lib/bookLib';

import { Button } from 'react-bootstrap';
import styles from '../AddBook/AddBook.module.css'


const AddBook = () => {
    const navigate = useNavigate();
    const { username, email, phone } = useContext(AuthContext)
    
    const addBookSubmitHandler = async (values) => {        
        try {
            await booksService.create(values);
            navigate('/all-books');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>ADD BOOK</h2>
            <Formik
                initialValues={{
                    title: '',
                    author: '',
                    genre: '',
                    image: '',
                    description: '',
                    price: '',
                    cover: '',
                    withCause: false,
                    causeUrl: '',
                    condition: '',
                    language: '',
                    bookLocation: '',
                    bookSold: false,
                    ownerUsername: username,
                    ownerEmail: email,
                    ownerPhone: phone,
                }}
                validationSchema={Yup.object().shape(addBookValidations)}
                onSubmit={(values, { setSubmitting }) => {
                    addBookSubmitHandler(values)
                    setSubmitting(false);
                }}
            >
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
                        name="imageUrl"
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

                    <MyTextarea
                        label="Description"
                        name="description"
                        type="textarea"
                        placeholder="Description"
                    />
                    <p><span>*</span> required field</p>
                    <p><span>**</span> field is required if "Book with Cause" is checked</p>
            
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Formik>
        </div>
    );
}

export default AddBook