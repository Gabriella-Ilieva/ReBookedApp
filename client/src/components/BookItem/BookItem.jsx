import cover from '../../assets/images/atlas-izpravi-ramene.jpg'
import styles from './BookItem.module.css'

function BookItem({
    _id,
    image,
    withCause,
    title,
    price

}){
    return(
        <div className={styles.card}>
            <img className={styles.image} src={image || cover}/>
            {withCause && (<p className={styles.badgeCause}>CAUSE</p>)}
            {price === 0 && (<p className={styles.badgePrice}>FREE</p>)}
            {price > 0 && (<p className={styles.badgePrice}>{price} BGN</p>)}
            <div className={styles.title}>{title}</div>
        </div>
    )
}

export default BookItem