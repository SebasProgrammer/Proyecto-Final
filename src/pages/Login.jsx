import React from 'react'
import '../App.css'

function Login() {
  return (
    <div>
        <h1>Inicio Sesión</h1>

        <form>
          <div className="input-group mb-3 mx-auto">
            <input type="text" className="form-control" placeholder="Usuario" />
          </div>

          <div className="input-group mb-3 mx-auto">
            <input type="text" className="form-control" placeholder="Contraseña" />
          </div>
          <button className="btn btn-primary input-group-text" type="submit">Inicio Sesión</button>
        </form>
    </div>
  )
}

export default Login