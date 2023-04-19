//Barra de navegación
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import PurchasesSidebar from './PurchasesSidebar';

// show = estado     ----- handleClose = Función
function NavBar() {
  // Estado
  const [show , setShow] = useState(false)
  const handleClose = ( ) => {
    setShow(false)  // Para cerrar el sidebar
  }
  
  return (
    // Fragmentos <> </>
    <>
    <Navbar bg="danger" variant="success">
    <Container>
      <Navbar.Brand as={ Link} to="/">Ecommerce</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={ Link} to="/login">Inicio Sesión</Nav.Link>
        <Nav.Link as={ Link} to="/purchases" >Favoritos</Nav.Link>
        <Nav.Link 
        onClick={() => setShow(true)}
        >Carrito (sidebar)</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  {/* Sidebar == Aparece - Muestra */}
  <PurchasesSidebar 
  show={show}
  handleClose={handleClose}
  />
    </>
  )
}

export default NavBar;

/* // Barra de navegación 
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
        <Nav.Link as={ Link} to="/login">Inicio Sesión</Nav.Link>
        <Nav.Link as={ Link} to="/purchases" >Favoritos</Nav.Link>
        <Nav.Link >Carrito (sidebar)</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar; */