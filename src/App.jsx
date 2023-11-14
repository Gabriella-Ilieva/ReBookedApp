import CauseBooksSection from './components/CauseBooksSection';
import NavigationBar from './components/NavigationBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './components/App.module.css'


function App() {
  return (
    <div className={styles.appStyle}>
        <NavigationBar/>
        <CauseBooksSection/>
    </div>
  )
}

export default App
