import styles from './404.module.css';
import error404 from '../../assets/images/4041.jpg'

function ErrorPage() {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>404 - Page not found</h2>
                <img src={error404}/>
                <h3>You're just chasing the wind ...</h3>
            </div>
        </div>
    )
}

export default ErrorPage