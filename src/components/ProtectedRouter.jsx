//Historial de pagos
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const token = localStorage.getItem("token")
    // null => No hay token
    // dksldsk,l.ñ => Si hay token
		


    if(token){
        // token = Es un trutin
        return <Outlet />
    } else { 
        // token = null
        return <Navigate to='/login' />
    }                    
};                        

export default ProtectedRoutes;