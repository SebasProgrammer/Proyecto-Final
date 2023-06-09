
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
    // Importamos las paginas - pages
    import ProductsDetails from './pages/ProductsDetails';
    import Login from './pages/Login'
    import Purchases from './pages/Purchases'
    import { useSelector } from 'react-redux';
    import Loader from "./components/Loader";
    import ProtectedRoutes from './components/ProtectedRouter'
    
    
    function App() {
    
      const isLoading = useSelector((state) => state.isLoading)
    
      return (
        <HashRouter>
          <div className="App">
            {isLoading && <Loader />}
            {/* Componente NavBar */}
            <NavBar />
            <Routes>
              {/* RUTAS */}
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductsDetails />} />
              <Route path="/login" element={<Login />} /> 
              <Route element={<ProtectedRoutes />}>

                {/* Ruta protegida */}

              <Route path="/purchases" element={<Purchases />} /> 
              </Route>
            </Routes>
          </div>
        </HashRouter>
      );
    }
    
    export default App;