/* CARRITO DE COMPRAS */

import Button from 'react-bootstrap/Button';
import { Col,Row, Container } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';

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
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <ul>
                    {
                        purchases?.map( item => (
                            
                            <div key={item.id}>
                                
                                <Container>
                                    <h2>{item?.product.title}</h2>
                                    <img style={{width:80, objectFit: "contain"}} src={item?.product.images[0].url} alt="" />
                                    
                                    <Row className='mb-3'>
                                        <Col>
                                            <Button onClick={()=>
                                                dispatch(updateFavoriteThunk(item.id, item.quantity-1))}>-
                                            </Button>
                                
                                            {
                                                item.quantity
                                            }
                                            
                                            <Button onClick={()=>
                                                dispatch(updateFavoriteThunk(item.id, item.quantity+1))}>+
                                            </Button>
                                
                                        </Col>
                                        <Col>
                                            <Button onClick={()=>dispatch(deleteFavoriteThunk(item.id))}>Delete</Button>
                                        </Col>
                                    </Row>
                                </Container>
                                                        
                            </div>
                        ))
                        
                    }
                    
                </ul>

                <div style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
                    <Button style={{textAlign: "center"}} onClick={() => dispatch(cartCheckoutThunk())}>Checkout</Button>

                </div>

            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default PurchasesSidebar;

// FavoritesSidebar.js


/* Corregir PurchasesSidebar */


