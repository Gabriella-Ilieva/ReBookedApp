import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import Path from '../paths';


function NavigationBar() {
    const {isAuthenticated, username} = useContext(AuthContext)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                    alt="Logo"
                    src={Logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    ReBooked
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
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
                    {isAuthenticated && (
                        <Nav>
                            <Nav.Link as={Link} to={Path.AddBook}>Add Book</Nav.Link>
                            <NavDropdown title={username} id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={Path.UserDetails}>View details</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={Path.EditProfile}>Edit Profile</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={Path.Logout}>Log Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    )}
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
  }

export default NavigationBar;