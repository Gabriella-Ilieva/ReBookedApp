import { useState, useEffect } from "react";
import * as booksService from '../../services/booksService'
import { useParams } from "react-router-dom";
import cover from '../../assets/images/atlas-izpravi-ramene.jpg'
import styles from './BookDetails.module.css'

function BookDetails() {
    const [book, setBook] = useState({});
    const { bookId } = useParams();
    let causeLink = '';

    useEffect(() => {
        booksService.getOne(bookId)
            .then(setBook);
    }, [bookId]);

    causeLink = book.causeURL

    return(
        <section className={styles.wrapper}>
            <h3>{book.title}</h3>
            <div className={styles.content}>
                <div className={styles.imageContainer}>
                    <img className={styles.image} src={book.image || cover}/>
                </div>
                <div className={styles.bookData}>
                    <p>Author: {book.author}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Cover: {book.cover}</p>
                    <p>Condition: {book.condition}</p>
                    <p>Language: {book.language}</p>
                    <p>price: {book.price > 0 ? book.price : 'FREE'}</p>
                    <p>Book location: {book.bookLocation}</p>
                </div>
                <div className={styles.causeSection}>
                    {book.withCause && (<p className={styles.causeText}>
                        <span className={styles.important}>IMPORTANT !!!</span>This book supports a cause. By purchasing it, you will support the following cause: 
                        <div><a href={causeLink}>{book.causeURL}</a></div></p>)}
                </div>
                <div className={styles.description}>
                    <p>Description: {book.description}</p>
                </div>
            </div>
        </section>
        
    )
}

export default BookDetails