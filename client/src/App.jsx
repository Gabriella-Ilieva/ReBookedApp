import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import AuthGuard from './components/RouteGuard/AuthGuard'

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
import ErrorPage from './components/ErrorPage/404';
import ServerError from './components/ErrorPage/ServerError';

import Path from './paths';

import styles from './components/App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About/About';


function App() {
  return (
    <AuthProvider>
        <div className={styles.appStyle}>
            <NavigationBar/>
            <Routes>
                <Route path={Path.Home} element={ <HomePage/> }/>
                <Route path={Path.Register} element={ <RegisterUser/> }/>
                <Route path={Path.Login} element={ <LogIn/> }/>
                <Route path={Path.AllBooks} element={ <AllBooks/>} />
                <Route path={Path.BookDetails} element={ <BookDetails/> }/>
                <Route path={Path.About} element={ <About/> }/>
                <Route path={Path.Error500} element={ <ServerError/> }/>
                <Route path='*' element={ <ErrorPage/> }/>
                <Route element={<AuthGuard />}>
                    <Route path={Path.AddBook} element={ <AddBook/> }/>
                    <Route path={Path.EditBook} element={ <EditBook/> }/>
                    <Route path={Path.UsersBooks} element={ <UsersBooks/> }/>
                    <Route path={Path.Logout} element={ <Logout/> }/>
                </Route>
            </Routes>
        
            <Footer/>
        </div>
    </AuthProvider>
  )
}

export default App
