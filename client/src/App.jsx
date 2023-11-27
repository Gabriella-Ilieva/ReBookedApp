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
import Logout from './components/LogOut/LogOut';
import AddBook from './components/AddBook/AddBook';
import AllBooks from './components/AllBooks/AllBooks';


function App() {
  return (
    <AuthProvider>
        <div className={styles.appStyle}>
            <NavigationBar/>
            <Routes>
                <Route path={Path.Home} element={<CauseBooksSection/>}/>
                <Route path={Path.Register} element={<RegisterUser/>}/>
                <Route path={Path.Login} element={<LogIn/>}/>
                <Route path={Path.Logout} element={<Logout/>}/>
                <Route path={Path.AddBook} element={<AddBook/>}/>
                <Route path={Path.AllBooks} element={ <AllBooks/>} />
            </Routes>
        
            <Footer/>
        </div>
    </AuthProvider>
  )
}

export default App
