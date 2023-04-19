// Estas importaciones es para generar columnas y filas - Contenedores
import Container from 'react-bootstrap/Container'; //Contenedores
import Row from 'react-bootstrap/Row';  //Filas
import Col from 'react-bootstrap/Col'; //Columnas

// Botones y Cards
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Link } from 'react-router-dom';

// Slices - useSelector
import { useSelector , useDispatch } from 'react-redux';
import { filterCategoriesThunk, getProductsThunk, filterHeadlineThunk } from '../store/slices/products.slice';

import { useEffect, useState } from 'react';

import '../App.css'
import axios from 'axios';

function Home() {
  // Acceder a slices
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  const [categories, setCategories] = useState([])
  const [inputSearch, setInputSearch] = useState("")
  
  // Damos funcionalidad - useEffect
  useEffect(()=> {
    dispatch(getProductsThunk())

    axios
      .get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
      .then(resp=> setCategories(resp.data))
      .catch(error=>console.log(error))   
    },[])

  return (
    <div>
      <Container>
            {/* <h2 className='titleHome'>OPPO RENO 7</h2>
            <p>Celular Cámara microscópica</p>
            <img className='Oppo' src="oppo2.png" alt="" /> */}

          <Row className='py-3'>
            {
              categories.map( category => (
                <Col key = {category.id}>
                  <Button className='w-100' onClick={()=>
                  dispatch(filterCategoriesThunk(category.id))}>{category.name}</Button>
                </Col>
              ))
            }

            <Col>
              <Button 
              onClick={ ()=> dispatch(getProductsThunk())}
              className='w-100'>All</Button>
            </Col>
            
          </Row>  

          <Row className='py-3'>
            <Col>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Busca producto por nombre"
                  aria-label="Nombre de producto"
                  aria-describedby="basic-addon2"
                  value={inputSearch}
                  onChange={e=>setInputSearch(e.target.value)}
                />
                <Button
                variant = "outline-primary"
                onClick={ () => dispatch(filterHeadlineThunk(inputSearch))}>
                  Search
                </Button>
              </InputGroup>
            </Col>
          </Row>

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
                  {/* Boton para ver detalle de producto */}
                  <Button  
                  variant="primary"
                  as = {Link}
                  to = {`/products/${item.id}`}
                  > Ver detalle</Button>
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

/* TEORIA */
// xs={1} = Nos ayuda a poner las columnas y los espacios

/* Breakpoint	Class infix	Dimensions
X-Small	None	<576px
Small	sm	≥576px
Medium	md	≥768px
Large	lg	≥992px
Extra large	xl	≥1200px
Extra extra large	xxl	≥1400px */


