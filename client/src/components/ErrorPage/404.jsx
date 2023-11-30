import styles from './404.module.css';

function ErrorPage() {
    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <img src="https://th.bing.com/th/id/R.01756bebebd0cfb9fe3d085eefdde8a3?rik=3MkCHnhNDY2QGQ&riu=http%3a%2f%2fih0.redbubble.net%2fimage.46003698.1350%2fsticker%2c375x360.png&ehk=%2byhj4XCRXzOSSz3Tmcb2XPjyQTjESgP%2feBYeFknC5QI%3d&risl=&pid=ImgRaw&r=0"/>
                <h3>404 - PAGE NOT FOUND</h3>
                <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
            </div>
        </div>
    )
}

export default ErrorPage