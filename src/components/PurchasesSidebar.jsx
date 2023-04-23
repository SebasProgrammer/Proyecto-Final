/* CARRITO DE COMPRAS */

import Button from 'react-bootstrap/Button';
import { Col,Row, Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from 'react-bootstrap/Card';
// Importaciones carrito compra
import { useDispatch,useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {getFavoritesThunk, cartCheckoutThunk, deleteFavoriteThunk, updateFavoriteThunk} from '../store/slices/purchases.slice'

const PurchasesSidebar = ({ show, handleClose }) => {
    const dispatch = useDispatch()

    const token = localStorage.getItem("token")

    useEffect(()=>{
        if (token) dispatch(getFavoritesThunk())
        
    },[]);

    

    const purchases = useSelector( (state) => state.purchases)
    console.log(purchases)
    
    return (
        <Offcanvas show={show} onHide={handleClose} placement={"end"} >
            <Offcanvas.Header closeButton>
                <Offcanvas.Title><i className='bx bxs-cart bx-fade-left' style={{color:"black", fontSize:30}} ></i> Carrito de Compras </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {
                        purchases?.map( item => (

                            <Card style={{ width: '100%', display: "flex", flexDirection:"row", alignItems: "center", justifyContent:"center" ,border:0 }} key={item.id}>
                                <Card.Img style={{width:80, objectFit: "contain"}} variant="left" src={item?.product?.images[0]?.url}/>
                                <Card.Body className='d-inline'>
                                    <Card.Title>{item?.product?.title}</Card.Title>
                                    
                                    <Card.Text style={{fontWeight: "bold"}}>
                                        Cantidad: 
                                        <button style={{width: 20, border: 1, boxShadow: 10, margin: 5}} onClick={()=>
                                            dispatch(updateFavoriteThunk(item.id, item.quantity-1))}>-
                                        </button>
                                        
                                        {item?.quantity} 

                                        <button style={{width: 20, border: 1, boxShadow: 10, margin:5}} onClick={()=>
                                                dispatch(updateFavoriteThunk(item.id, item.quantity+1))}>+
                                        </button>

                                    </Card.Text>
                                    
                                    <Card.Text style={{fontWeight: "bold"}}>
                                        Precio: S/. {parseFloat(item?.product?.price) * parseFloat(item.quantity)}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            
                        ))
                        
                    }
                    
                </ul>

                <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                    <Button style={{textAlign: "center"}} onClick={() => dispatch(cartCheckoutThunk())}>Comprar</Button>

                </div>

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default PurchasesSidebar;

// FavoritesSidebar.js


/* Corregir PurchasesSidebar */


