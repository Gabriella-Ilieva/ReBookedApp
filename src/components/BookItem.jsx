import {Card, Button} from 'react-bootstrap';
import cover from '../assets/images/atlas-izpravi-ramene.jpg'
import cover3 from '../assets/images/cover3.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import styles from './BookItem.module.css'

function BookItem(){
    return(
        <div className={styles.card}>
            <div className={styles.cardContent}>
                    <img className={styles.image} src={cover}/>
                    <div className={styles.titlePrice}>
                        <span className={styles.title}>Some very log book`s title 1.</span>
                        <span>Price: 12.50</span>
                        <button className={styles.btn}>View</button>
                    </div>
            </div>
        </div>
    )
}

export default BookItem