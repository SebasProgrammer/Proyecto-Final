import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'; //Contenedores
import Row from 'react-bootstrap/Row';  //Filas
import Col from 'react-bootstrap/Col'; //Columnas
import Button from 'react-bootstrap/Button';
import { createFavoriteThunk } from '../store/slices/purchases.slice';
import { useDispatch } from 'react-redux';

function ProductsDetails() {

  const { id } = useParams();
  const [detail, setDetail] = useState({})
  const [counter, setCounter] = useState(1)
  const dispatch = useDispatch()

  useEffect(() => {
      axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
        .then((resp) => {setDetail(resp.data);
        console.log(resp.data)})
        .catch((error) => console.log(error))
  }, []);

  const addFavorites = ()  => {
    const data = {
      quantity: counter,
      productId: id
    }

    dispatch(createFavoriteThunk( data ))
  }

  return (
    <Container>   
      
      <Row>
        <Col>
            <h1>{detail.title}</h1>
            <img src={detail?.images?.[0]?.url} alt="" />
            <p><strong>{detail.price}</strong></p>
          <Row>
            <Col>
              <Button onClick={() => setCounter(counter-1)}>-</Button>
                {
                  counter
                }
                <Button onClick={() => setCounter(counter+1)}>+</Button>
            </Col>
            <Col>
              <Button onClick={addFavorites}>
                Añadir a Carrito
              </Button>
            </Col>
          </Row>

        </Col>
        
        <Col>
          <br />
          <p style={{textAlign: "justify"}}>{detail.description}</p>          
        </Col>

      </Row>
      
    </Container>
  )
}

export default ProductsDetails