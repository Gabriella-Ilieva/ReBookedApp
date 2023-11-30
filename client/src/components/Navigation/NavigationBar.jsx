import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import AuthContext from '../../contexts/authContext';
import * as authService from '../../services/authService'
import Path from '../../paths';
import {Container, Nav, Navbar, NavDropdown, Modal} from 'react-bootstrap'
import Logo from '../../assets/images/Logo.png'
import styles from './NavigationBar.module.css';
import { pathToUrl } from '../../utils/pathUtils';


function NavigationBar() {
    const {isAuthenticated, username, userId} = useContext(AuthContext);
    const [userData, setUserData] = useState({});
    const [show, setShow] = useState(false);

    useEffect(() => {
        authService.userDetails()
            .then(setUserData);
    }, [userId]);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.container}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                        alt="Logo"
                        src={Logo}
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        />{' '}
                        {/* ReBooked */}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className={styles.navigation}>
                        <Nav className="me-auto">
                            <Nav.Link href="#features">About</Nav.Link>
                            <Nav.Link as={Link} to={Path.AllBooks}>Books</Nav.Link>
                            <Nav.Link href="#pricing">Causes</Nav.Link>
                        </Nav>
                        {!isAuthenticated && (
                            <Nav>
                                <Nav.Link as={Link} to={Path.Login}>Log In</Nav.Link>
                                <Nav.Link as={Link} eventKey={2} to={Path.Register}>Register</Nav.Link>
                            </Nav>
                        )}
                        
                            <Nav>
                                <Nav.Link as={Link} to={Path.AddBook}>Add Book</Nav.Link>
                                {isAuthenticated && (
                                <NavDropdown title={username} id="basic-nav-dropdown">
                                    <NavDropdown.Item onClick={handleShow}>View details</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={pathToUrl(Path.UsersBooks, {userId})}>My books</NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to={Path.Logout}>Log Out</NavDropdown.Item>
                                </NavDropdown>
                                )}
                            </Nav>
                        
                    </Navbar.Collapse>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{userData.username}'s details</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={styles.modal}>
                                    <div className={styles.imageContainer}>
                                        <img className={styles.image} src={userData.imageUrl}/>
                                    </div>
                                    <div>
                                        <p><b>Username: </b>{userData.username}</p>
                                        <p><b>E-mail: </b>{userData.email}</p>
                                        <p><b>Country: </b>{userData.country}</p>
                                        <p><b>City: </b>{userData.city}</p>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                </Container>
            </Navbar>
        </div>
    );
  }

export default NavigationBar;