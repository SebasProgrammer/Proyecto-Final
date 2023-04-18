import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container'; //Contenedores
import Row from 'react-bootstrap/Row';  //Filas
import Col from 'react-bootstrap/Col'; //Columnas

function ProductsDetails() {

  const { id } = useParams();
  const [detail, setDetail] = useState({})

  useEffect(() => {
      axios
        .get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
        .then((resp) => {setDetail(resp.data);
        console.log(resp.data)})
        .catch((error) => console.log(error))
  }, []);

  return (
    <Container>      
      <Row>
        <Col>
          <h1>{detail.title}</h1>
          <p>By: {detail.description}</p>
          <p>{detail.price}</p>
          <p>{detail.brand}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductsDetails