import { useState, useEffect, useContext } from "react";
import * as booksService from '../../services/booksService'
import { Link, useNavigate, useParams } from "react-router-dom";
import cover from '../../assets/images/atlas-izpravi-ramene.jpg'
import styles from './BookDetails.module.css'
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

function BookDetails() {
    const { userId } = useContext(AuthContext)
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    let causeLink = '';
    const navigate = useNavigate();

    useEffect(() => {
        booksService.getOne(bookId)
            .then(setBook);
    }, [bookId]);

    causeLink = book.causeURL

    const deleteHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${book.title} ?`);

        if (hasConfirmed) {
            await booksService.remove(bookId);

            navigate('/all-books');
        }
    }

    return(
        <section className={styles.wrapper}>
            <h3>{book.title}</h3>
            <div className={styles.causeSection}>
                {book.withCause && (<p className={styles.causeText}>
                    <span className={styles.important}>NOTICE !!!</span>This book supports a cause. By purchasing it, you will support the following cause: 
                    <a href={causeLink} className={styles.causeLink}>{book.causeURL}</a></p>)}
            </div>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={book.image || cover}/>
                </div>
                <div className={styles.bookData}>
                    <p><b>Author: </b>{book.author}</p>
                    <p><b>Genre: </b>{book.genre}</p>
                    <p><b>Cover: </b>{book.cover}</p>
                    <p><b>Condition: </b>{book.condition}</p>
                    <p><b>Language: </b>{book.language}</p>
                    <p><b>Price: </b>{book.price > 0 ? book.price : 'FREE'}</p>
                    <p><b>Book location: </b>{book.bookLocation}</p>
                </div>
                
                <div className={styles.bookDescription}>
                    <p><b>DESCRIPTION: </b>{book.description}</p>
                </div>
                {userId === book._ownerId && (
                    <div className={styles.buttons}>
                    <Link to={Path.EditBook}>Edit</Link>
                    <button onClick={deleteHandler}>Delete</button>
                </div>
                )}
            </div>
        </section>
        
    )
}

export default BookDetails