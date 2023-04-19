/* CARRITO DE COMPRAS */

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Importaciones carrito compra
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import {getPurchasesThunk} from '../store/slices/purchases.slice'

const PurchasesSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch()


// useEffect
//     useEffect(()=>{
//         dispatch(getPurchasesThunk())
//     },[]);

    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements you
                have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default PurchasesSidebar;

// FavoritesSidebar.js


/* Corregir PurchasesSidebar */


