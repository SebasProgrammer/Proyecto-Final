import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import getConfig from '../utils/getConfig';
import Card from 'react-bootstrap/Card';

function Purchases() {
  const dispatch = useDispatch()
  const [purchases, setPurchases] = useState([])

  useEffect( () =>{
    axios
      .get(`https://e-commerce-api-v2.academlo.tech/api/v1/purchases`, getConfig())
      .then(resp=>{
        setPurchases(resp.data)
      })
      .catch( error => console.log(error))
  })

  useEffect(()=>{
    console.log(purchases)
  },[]);

  return (
    <div>
        <h1>Purchases</h1>
        {
          purchases?.map( item => (
            <Card style={{ width: '100%', display: "flex", flexDirection:"row" }} key={item.id}>
              <Card.Img variant="left" src={item?.product.images[0].url} style={{width: "150"}}/>
              <Card.Body className='d-inline'>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
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