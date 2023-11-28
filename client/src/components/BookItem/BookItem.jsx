import { Link } from 'react-router-dom'
import cover from '../../assets/images/atlas-izpravi-ramene.jpg'
import styles from './BookItem.module.css'
import BookDetails from '../BookDetails/BookDetails'
import Path from '../../paths'

function BookItem({
    _id,
    image,
    withCause,
    title,
    price

}){
    return(
        <div className={styles.card}>
            <Link to={`/all-books/${_id}`}><img className={styles.image} src={image || cover}/></Link>
            {withCause && (<p className={styles.badgeCause}>CAUSE</p>)}
            {price === 0 && (<p className={styles.badgePrice}>FREE</p>)}
            {price > 0 && (<p className={styles.badgePrice}>{price} BGN</p>)}
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default BookItem