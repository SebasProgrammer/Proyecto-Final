//Barra de navegación
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import PurchasesSidebar from './PurchasesSidebar';


function NavBar() {
  // Estado
  const [show , setShow] = useState(false)
  const handleClose = ( ) => {
    alert("Cierre de sesión")
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
  <PurchasesSidebar 
  show={show}
  handleClose={handleClose}
  />
    </>
  )
}

export default NavBar;