import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import Logo from '../assets/images/Logo.png'


function NavigationBar() {
    return (
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
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
              <Nav.Link href="#pricing">Books</Nav.Link>
              <Nav.Link href="#pricing">Causes</Nav.Link>
              {/* <NavDropdown title="Genre" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Log In</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default NavigationBar;