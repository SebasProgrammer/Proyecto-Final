// Estas importaciones es para generar columnas y filas - Contenedores
import Container from 'react-bootstrap/Container'; //Contenedores
import Row from 'react-bootstrap/Row';  //Filas
import Col from 'react-bootstrap/Col'; //Columnas

// Botones y Cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Slices - useSelector
import { useSelector , useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

import { useEffect } from 'react';

import React from 'react'

function Home() {
  // Acceder a slices
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  
  // Damos funcionalidad - useEffect
  useEffect(()=> {
    dispatch(getProductsThunk())
  },[])





  return (
    <div>
      <Container>
          <Row xs={1} md={2} lg={3} className="py-3">
            {/* Mapeo */}
            {
              products.map(item => (
                /* Columnas */
                <Col className='mb-3' key={item.id}>
              <Card >
                {/* Imagen del producto */}
                  <Card.Img 
                  variant="top" 
                  src={item.images?.[0].url} 
                  /* Estilos */
                  style={{height: 200 , objectFit: "cover", width: 300 } }
                  
                  
                  />
                  <Card.Body>
                    {/* TITULO DEL PRODUCTO */}
                  <Card.Title>{item.title}</Card.Title>
                  {/* DESCRIPCION DEL PRODUCTO */}
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  {/* Boton para agregar al carrito */}
                  <Button  variant="primary">Agregar al Carrito</Button>
                  </Card.Body>
              </Card>
                </Col>
              ))
              }
          
          </Row>
      </Container>
    </div>
  )
}

export default Home

/* TEORIA */
// xs={1} = Nos ayuda a poner las columnas y los espacios

/* Breakpoint	Class infix	Dimensions
X-Small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px */



