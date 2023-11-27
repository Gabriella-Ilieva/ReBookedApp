import { Route, Routes } from 'react-router-dom';
import CauseBooksSection from './components/CauseBooksSection';
import NavigationBar from './components/NavigationBar'
import LogIn from './components/LogIn/LogIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './components/App.module.css'
import RegisterUser from './components/Register/Register';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/authContext';
import Path from './paths';


function App() {
  return (
    <AuthProvider>
        <div className={styles.appStyle}>
            <NavigationBar/>
            <Routes>
                <Route path={Path.Home} element={<CauseBooksSection/>}/>
                <Route path='/register' element={<RegisterUser/>}/>
                <Route path='/login' element={<LogIn/>}/>
            </Routes>
        
            <Footer/>
        </div>
    </AuthProvider>
  )
}

export default App
