import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
// Para movernos a el Home 
import { useNavigate } from 'react-router-dom';

function Login() {

  const {register, handleSubmit} = useForm()
  // Para movernos al Home , desde Login al Home
  const navigate = useNavigate()

  const submit = data => {
    /* Para crear los usuarios y que se guarden en el DOM */
    // El link de login no esta autorizado ====> ARREGLAR 
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .then(resp => {
        //LocalStorage.setItem("key , value")
        localStorage.setItem("token",resp.data.access)
        navigate("/")
      })
      .catch( error => {
        if(error.response?.status === 401){
          alert("Credenciales incorrectas")
        }else{
          
          console.log(error.response?.data)
        }
      })
  }
  return (
    <Form className='Session'
    /* style={{maxWidth:500, margin:"1rem auto",border:"1px solid black",padding:"1rem"}} */
      onSubmit={handleSubmit(submit)}
    >
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label className='co'>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        { ...register("email")}/>
      </Form.Group>

      <Form.Group  className="mb-5" controlId="formBasicPassword">
        <Form.Label className='c'>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        { ...register("password")}/>
      </Form.Group>
      <Button className='button' variant="primary" type="submit">
       <span className='init'>Iniciar Sesión</span> 
      </Button >
    </Form>
  )
}

export default Login