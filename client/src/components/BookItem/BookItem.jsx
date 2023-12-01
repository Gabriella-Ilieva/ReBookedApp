import { Link } from 'react-router-dom'

import cover from '../../assets/images/book-cover.jpg'
import styles from './BookItem.module.css'

function BookItem({
    _id,
    imageUrl,
    withCause,
    title,
    price

}){
    return(
        <div className={styles.card}>
            <Link to={`/all-books/${_id}`}><img className={styles.image} src={imageUrl || cover}/></Link>
            {withCause && (<p className={styles.badgeCause}>CAUSE</p>)}
            {price === 0 && (<p className={styles.badgePrice}>FREE</p>)}
            {price > 0 && (<p className={styles.badgePrice}>{Number(price).toFixed(2)} BGN</p>)}
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default BookItem