import styles from './ServerError.module.css';
import errorImg from '../../assets/images/500.png'


function ErrorPage() {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2>500 - Internal server error</h2>
                <img src={errorImg}/>
                <h3>Well, this is unexpected... But bad things happened</h3>
            </div>
        </div>
    )
}

export default ErrorPage
