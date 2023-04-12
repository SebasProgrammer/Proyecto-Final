// Barra de navegación 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar bg="danger" variant="success">
    <Container>
      <Navbar.Brand as={ Link} to="/">Ecommerce</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={ Link} to="/login">Inicio</Nav.Link>
        <Nav.Link as={ Link} to="/purchases" >Favoritos</Nav.Link>
        <Nav.Link >Carrito (sidebar)</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar;
