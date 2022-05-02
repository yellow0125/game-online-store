import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Button, Table, } from 'react-bootstrap'
import Message from '../components/Message'
import { createOrder } from '../actions/orderAction'
import { ORDER_CREATE_RESET } from "../constants/orderConstants"
import Meta from "../components/Meta";

const CheckoutScreen = () => {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)

    // console.log(cart);

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    // redirect to payment page if successfully create order
    const navigate = useNavigate()
    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
            // reset order
            dispatch({ type: ORDER_CREATE_RESET })
        }
        // eslint-disable-next-line
    }, [success])

    const confirmOrder = () => {
        // console.log('confirm order');
        dispatch(
            createOrder({
                orderItems: cart.cartItems,
                totalPrice: cart.cartItems.reduce((acc, item) => (acc + item.qty * item.price) * 1.12, 0).toFixed(2)
            })
        )
    }

    return (
        <>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    {error && <Message variant='danger'>{error}</Message>}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>My Items</h2>
                    {cart.cartItems.length === 0 ? (
                        <Message>Cart is empty</Message>
                    ) : (
                        //  cart items list
                        <>
                        <Meta title={'Please to Checkout your items'} />
                        <ListGroup variant='flush'>
                            {cart.cartItems.map((item, index) => (
                                <ListGroup.Item key={index}>
                                    <Row>
                                        <Col md={1}>
                                            <Image
                                                src={item.cover}
                                                alt={item.name}
                                                fluid
                                                rounded
                                            />
                                        </Col>
                                        <Col>
                                            <Link to={`/details/${item.product}`}>
                                                {item.name}
                                            </Link>
                                        </Col>
                                        <Col md={4}>
                                            $ {item.price} X {item.qty}   = $ {item.qty * item.price}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        </>
                    )}
                </ListGroup.Item>
                <ListGroup.Item>
                    <h2>Checkout</h2>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <Table striped bordered hover>
                                <thead>
                                </thead>
                                <tbody>
                                    <tr style={{ color: 'red', fontSize: '15px' }}>
                                        <td>Subtotal
                                            ({cart.cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</td>
                                        <td> ${cart.cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</td>
                                    </tr>
                                    <tr style={{ fontSize: '15px' }}>
                                        <td >Delivery</td>
                                        <td style={{ color: 'white' }}> Free</td>
                                    </tr>
                                    <tr style={{ fontSize: '15px' }}>
                                        <td>Estimated tax rate</td>
                                        <td> 12%</td>
                                    </tr>
                                    <tr>
                                        <td><b>Total</b></td>
                                        <td><b>${cart.cartItems.reduce((acc, item) => (acc + item.qty * item.price) * 1.12, 0).toFixed(2)}</b></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block bg-success'
                                disabled={cart.cartItems.length === 0}
                                style={{
                                    width: '350px',
                                    display: 'block',
                                    margin: 'auto',
                                    color:'black' 
                                }}
                                onClick={confirmOrder}
                            >
                                Confirm
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default CheckoutScreen