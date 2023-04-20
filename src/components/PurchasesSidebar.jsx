/* CARRITO DE COMPRAS */

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Importaciones carrito compra
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getFavoritesThunk} from '../store/slices/purchases.slice'

const PurchasesSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getFavoritesThunk())
    },[]);

    const purchases = useSelector( (state) => state.purchases)
    console.log(purchases)
    
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {
                        purchases?.map( item => (
                            <li key={item.id}>
                                <h2>{item?.product.title}</h2>
                                <img style={{width:80, objectFit: "contain"}} src={item?.product.images[0].url} alt="" />
                            </li>
                        ))
                    }
                </ul>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default PurchasesSidebar;

// FavoritesSidebar.js


/* Corregir PurchasesSidebar */


