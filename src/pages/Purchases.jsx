import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Card from 'react-bootstrap/Card';

function Purchases() {
  const [purchases, setPurchases] = useState([])

  useEffect( () =>{
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
      .then((resp)=>{
        console.log(resp.data)
        setPurchases(resp.data)
      })
      .catch( (error) => console.log(error))
  }, [])

  return (
    <div>
        <h1>Purchases</h1>
        {
          purchases?.map( item => (
            <Card style={{ width: '100%', display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"center" ,border:0 }} key={item.id}>
              <Card.Img variant="left" src={item?.product?.images[0].url} style={{height: 200}}/>
              <Card.Body className='d-inline'>
                <Card.Title>{item?.product?.title}</Card.Title>
                <Card.Text style={{textAlign: "justify"}}>
                  Cantidad: {item?.product?.description}
                </Card.Text>
                <Card.Text style={{fontWeight: "bold"}}>
                  Cantidad: {item?.quantity} Precio: {item?.product?.price}
                </Card.Text>
              </Card.Body>
            </Card>
          )
          )
        }
    </div>
  )
}

export default Purchases

// Historial de compras