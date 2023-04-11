
//Necesitamos configurar
  /* Redux
    Router dom
    Boostrap */


    import './App.css'


//React Router
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './pages/Home'

function App() {


/* MINUTO 50 */

  return (
    <HashRouter>
          <div className="App">
            {/* Componente NavBar */}
            <NavBar />
      <Routes>
            {/* RUTAS */}
        <Route path="/" element={<Home />} />
    {/*     <Route path="/about" element={} />
	      <Route path="/about/team" element={} />  */}
      </Routes>
           </div>
    </HashRouter>
  );
}

export default App;

