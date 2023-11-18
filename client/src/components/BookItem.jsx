import cover from '../assets/images/atlas-izpravi-ramene.jpg'
import cover3 from '../assets/images/cover3.jpg'
import styles from './BookItem.module.css'

function BookItem(){
    return(
        <div className={styles.card}>
            <img className={styles.image} src={cover}/>
            <p className={styles.badge}>CAUSE</p>
            <div className={styles.titlePrice}>
                <span className={styles.title}>Some very log book`s title 1.</span>
                <span>Price: 12.50</span>
            </div>
        </div>
    )
}

export default BookItem