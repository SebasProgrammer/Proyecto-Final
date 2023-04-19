import React from 'react'
import '../App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {

  const {register, handleSubmit} = useForm()
// Navigate
const navigate = useNavigate()


  const submit = data => {
    axios
      .post("https://e-commerce-api-v2.academlo.tech/api/v1/users/login", data)
      .then(resp => {
        console.log(resp.data)
        localStorage.setItem("token",resp.resp.token)
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
    <Form 
      onSubmit={handleSubmit(submit)}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="Enter email" 
        { ...register("email")}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Password" 
        { ...register("password")}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  )
}

export default Login