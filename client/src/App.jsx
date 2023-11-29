import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';

import NavigationBar from './components/Navigation/NavigationBar'
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';
import RegisterUser from './components/Register/Register';
import LogIn from './components/LogIn/LogIn'
import Logout from './components/LogOut/LogOut';
import AddBook from './components/AddBook/AddBook';
import BookDetails from './components/BookDetails/BookDetails';
import EditBook from './components/EditBook/EditBook';
import AllBooks from './components/AllBooks/AllBooks';
import UsersBooks from './components/UsersBooks/UsersBooks';

import Path from './paths';

import styles from './components/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <AuthProvider>
        <div className={styles.appStyle}>
            <NavigationBar/>
            <Routes>
                <Route path={Path.Home} element={ <HomePage/> }/>
                <Route path={Path.Register} element={ <RegisterUser/> }/>
                <Route path={Path.Login} element={ <LogIn/> }/>
                <Route path={Path.Logout} element={ <Logout/> }/>
                <Route path={Path.AddBook} element={ <AddBook/> }/>
                <Route path={Path.AllBooks} element={ <AllBooks/>} />
                <Route path={Path.BookDetails} element={ <BookDetails/> }/>
                <Route path={Path.EditBook} element={ <EditBook/> }/>
                <Route path={Path.UsersBooks} element={ <UsersBooks/> }/>
            </Routes>
        
            <Footer/>
        </div>
    </AuthProvider>
  )
}

export default App
