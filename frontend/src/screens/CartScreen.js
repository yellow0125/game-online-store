import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserHistory } from "history";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Button,
  Form,
  Card,
  Table
} from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from "../actions/cartActions";
import Meta from "../components/Meta";


const CartScreen = () => {

  const { id } = useParams()
  const history = createBrowserHistory();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const qty = history.location.search ? Number(history.location.search.split('=')[1]) : 1
  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty))
    }
  }, [dispatch, id, qty])

  const removerFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    if (userInfo) {
      navigate('/checkout')
    }
    else {
      navigate('/login')
    }
  }

  return (
    <Row>
      {cartItems.length === 0 ? (
        <Message variant=''>
          <br className='mt-4' />
          <br className='mt-4' />
          <br className='mt-4' />
          <h2 >Your Cart is Empty</h2>
          <small>Check out what we're featuring now!</small><br /><br />
          <Link to='/'><Button
            style={{
              width: '350px',
              margin: 'auto',
            }}
            className='bg-dark'

          >Go to Homepage</Button></Link><br />
          <Image src={'/images/cart.png'}
            alt='cartIcon'
            style={{
              width: '250px',
              display: 'block',
              margin: 'auto',
            }}
            fluid rounded />
        </Message>
      ) : (
        <>
        <Meta title={'Your Shopping Cart'} />
          <Col md={8}>
            <h5>Shopping Cart</h5>
            <b style={{
              fontSize: '15px',
              color: 'white',
            }}
            >${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} subtotal
              · {cartItems.reduce((acc, item) => acc + item.qty, 0)} items</b>
            <ListGroup variant='flush' className='mt-2'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row
                    style={{
                      fontSize: '12px',
                      color: 'grey',
                      marginLeft: '700px'
                    }}>
                    Each Price</Row>
                  <Row >
                    <Col md={3} xs={3}>
                      <Image src={item.cover} alt={item.name} fluid rounded />
                    </Col>
                    <Col xs={{ span: 4 }}>
                      <Row><small><Link to={`/details/${item.product}`}>{item.name}</Link></small></Row>

                      <Row>
                        <Col xs={1} className='mt-2'><h6>Qty.</h6></Col>
                        <Col xs={5} md={5} lg={3} xl={3}>
                          <Form.Control
                            as='select'
                            value={item.qty}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                            size='sm'
                          >
                            {[...Array(item.countInStock).keys()].map((i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </Form.Control>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={2} md={{ span: 1, offset: 3 }}><small>
                      ${item.price}
                    </small></Col>
                    <Col>
                      <Button
                        type='button'
                        aria-label='delete'
                        onClick={() => removerFromCartHandler(item.product)}
                        variant="dark"
                        size='sm'
                      >
                        <i className="fa-solid fa-trash-can" ></i>
                      </Button>
                    </Col>
                  </Row>
                  <br />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>

            <h5>Order summary</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Table striped hover>
                    <tbody>
                      <tr style={{ color: 'red', fontSize: '15px' }}>
                        <td>Subtotal
                          ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)</td>
                        <td> ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</td>
                      </tr>
                      <tr style={{ fontSize: '15px' }}>
                        <td >Delivery</td>
                        <td style={{ color: '#FF6666' }}> Free</td>
                      </tr>
                      <tr style={{ fontSize: '15px' }}>
                        <td>Estimated tax rate</td>
                        <td> 12%</td>
                      </tr>
                      <tr>
                        <td><b>Total</b></td>
                        <td><b>${cartItems.reduce((acc, item) => (acc + item.qty * item.price) * 1.12, 0).toFixed(2)}</b></td>
                      </tr>
                    </tbody>
                  </Table>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block bg-success'
                    disabled={cartItems.length === 0}
                    style={{
                      color:'black' ,
                      display: 'block',
                      margin: 'auto',
                      width:'15rem'
                    }}
                    onClick={checkoutHandler}
                  >
                    Proceed to checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </>
      )}
    </Row>
  )
}

export default CartScreen