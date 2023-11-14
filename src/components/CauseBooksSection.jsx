import BookItem from "./BookItem";
import styles from './CauseBooksSection.module.css';


function CauseBookSection(){
    return(
        <>
            <h3 className={styles.title}>Books with cause</h3>
            <div className={styles.section}>
            <div className={styles.books}>
                <BookItem/>
                <BookItem/>
                <BookItem/>
                <BookItem/>
            </div>
            </div>
        </>

        
    )
}

export default CauseBookSection