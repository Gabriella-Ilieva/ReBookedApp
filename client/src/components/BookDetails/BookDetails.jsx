import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext, useReducer } from "react";

import { Formik, Form} from 'formik';
import * as Yup from 'yup';
import { commentValidations } from "../../utils/validations";
import { MyTextInput } from "../../lib/fields";

import * as booksService from '../../services/booksService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";
import { pathToUrl } from "../../utils/pathUtils";
import reducer from "../../utils/reducer";

import { DropdownButton, Dropdown, ButtonGroup, Button } from 'react-bootstrap';
import styles from './BookDetails.module.css'
import cover from '../../assets/images/book-cover.jpg'

function BookDetails() {
    const { userId, isAuthenticated, username } = useContext(AuthContext)
    const [book, setBook] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);
    const [showA, setShowA] = useState(true);
    const { bookId } = useParams();
    const navigate = useNavigate();
    let price = 0;
    let causeLink = '';

    useEffect(() => {
        booksService.getOne(bookId)
            .then(setBook);

        commentService.getAll(bookId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [bookId, comments]);

    causeLink = book.causeURL
    price = Number(book.price).toFixed(2)
    
    const toggleShowA = () => {
        setShowA(!showA)
    };

    const deleteHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} ?`);

        if (hasConfirmed) {
            await booksService.remove(bookId);

            navigate('/all-books');
        }
    }

    const commentSubmitHandler = async (values) => {
        const newComment = await commentService.create(
            bookId,
            values.comment,
        );

        newComment.owner = { username };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    return(
        <>
            <section className={styles.wrapper}>
                <h3>{book.title}</h3>
                <div className={styles.causeSection}>
                    {book.withCause && (<p className={styles.causeText}>
                        <span className={styles.important}>NOTICE !!!</span>This book supports a cause. By purchasing it, you will support the following cause: 
                        <a href={causeLink} className={styles.causeLink}>{book.causeUrl}</a></p>)}
                </div>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <img className={styles.image} src={book.imageUrl || cover}/>
                    </div>
                    <div className={styles.bookData}>
                        <p><b>Author: </b>{book.author}</p>
                        <p><b>Genre: </b>{book.genre}</p>
                        <p><b>Cover: </b>{book.cover}</p>
                        <p><b>Condition: </b>{book.condition}</p>
                        <p><b>Language: </b>{book.language}</p>
                        <p><b>Price: </b>{book.price > 0 ? Number(book.price).toFixed(2) : 'FREE'}</p>
                        <p><b>Book location: </b>{book.bookLocation}</p>
                        <p><b>Owner: </b>{book.ownerUsername}</p>
                        <div className="mb-2">
                            <DropdownButton
                                as={ButtonGroup}
                                key={'end'}
                                id={`dropdown-button-drop-end`}
                                drop={'end'}
                                variant="secondary"
                                title='Owner contacts'
                                >
                                {isAuthenticated && 
                                <>
                                    <Dropdown.Item eventKey="1" role='text' className={styles.info}>Email: {book.ownerEmail}</Dropdown.Item>
                                    <Dropdown.Item eventKey="2" role='text' className={styles.info}>Phone: {book.ownerPhone}</Dropdown.Item>
                                </>
                                }
                                {!isAuthenticated && 
                                <Dropdown.Item as={Link} to={Path.Login} eventKey="3">You have to Log In to see this information</Dropdown.Item>}
                            </DropdownButton>
                        </div>
                    </div>
                    
                    <div className={styles.bookDescription}>
                        <p><b>DESCRIPTION: </b>{book.description}</p>
                    </div>
                    {userId === book._ownerId && (
                        <div className={styles.buttons}>
                        <Link to={pathToUrl(Path.EditBook, {bookId})}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={deleteHandler}>Delete</button>
                    </div>
                    )}
                </div>
            </section>
            <section className={styles.commentsContainer}>
                <h2>COMMENTS</h2>
                <div className={styles.comments}>
                    {comments.map( ({ _id, comment, owner: { username } }) => 
                        <div key={`${_id}-0`} className={styles.singleComment}>
                            <p key={`${_id}-1`}><b>{username}</b></p>
                            <p key={`${_id}-2`}>{comment}</p>
                        </div>
                    )}
                    
                    <div className={styles.container}>
                        <h2 className={styles.title}>New comment</h2>
                        <Formik
                            initialValues={{
                                comment: '',
                            }}
                            validationSchema={Yup.object().shape(commentValidations)}
                            onSubmit={(values, { setSubmitting }) => {
                                commentSubmitHandler(values)
                                setSubmitting(false);
                            }}
                        >
                            <Form className={styles.form}>

                                <MyTextInput
                                    label="Comment"
                                    name="comment"
                                    type="textarea"
                                    placeholder="Comment"
                                />
                        
                                <Button variant="primary" type="submit">Submit</Button>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BookDetails