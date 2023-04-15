import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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
    <div>
        <h1>{detail.title}</h1>
    </div>
  )
}

export default ProductsDetails