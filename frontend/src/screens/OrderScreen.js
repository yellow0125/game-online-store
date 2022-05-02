import React, { useState, useEffect } from 'react'
import {Link, useParams,useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PayPalButton } from 'react-paypal-button-v2'
import moment from 'moment'
import axios from 'axios'
import { Breadcrumb, Row, Col, Image, Table } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails, payMyOrder } from '../actions/orderAction';
import { ORDER_PAY_RESET } from '../constants/orderConstants'

const OrderScreen = () => {

  const [SDK, setSDK] = useState(false)

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { success: successPay, loading: loadingPay } = orderPay

  if (!loading) {
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }
    order.itemsPrice = addDecimals(
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    // dynamically create PayPal script
    const addPayPalScript = async () => {
      const { data: clientID } = await axios.get('/config/paypal')
      // console.log(clientID);
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientID}`
      script.async = true

      script.onload = () => {
        setSDK(true)
      }
      document.body.appendChild(script)
    }
    if (!userInfo) {
      navigate('/login')
    }
    if (!order || order._id !== id || successPay) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch(getOrderDetails(id))
    } else if (!order.isPaid) {
      // create paypal script only once
      if (!window.paypal) {
        addPayPalScript()
      } else {
        setSDK(true)
      }
    }

  }, [dispatch, navigate, userInfo, order, id, successPay])

  const successPayHandler = () => {
    // console.log(paymentInfo);
    dispatch(payMyOrder(id))
    // console.log('order after dispatch', order);
  }

  return (
    <>
      <Breadcrumb className='mt-2'>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">Your Profile</Breadcrumb.Item>
        <Breadcrumb.Item active>Order Details</Breadcrumb.Item>
      </Breadcrumb>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <>
            <h2>Order Details </h2>
            <Row>
              <Col md={8}>
                <div  style={{ color: '	#B0C4DE' }}>
                  <Col>Ordered on {moment(`${order.createdAt}`).format('MMMM Do YYYY')}</Col>
                  <Col>Order#:{order._id}</Col>
                </div>
                Redeem Code will be accepted by:
                <a href={`mailto:${order.user.email}`}>&nbsp;{order.user.email}</a>
                {order.isPaid ? (
                  <Message variant='success'>Your order is paid on {moment(`${order.paidAt}`).format('MMMM Do YYYY')}. Redeem Code has been sent!</Message>
                ) : (
                  <Message variant='danger'>Your order is unpaid. Pay now and get your Redeem Code!</Message>
                )}
              </Col>
              {/* if order is unpaid, show paypal button */}
              <Col md={4}>
                {order.isPaid ? (<></>) : (
                  <>
                    {loadingPay && <Loader />}
                    {SDK ? (
                      <PayPalButton
                        amount={order.totalPrice}
                        onSuccess={successPayHandler}>
                      </PayPalButton>
                    ) : (<Loader />)}
                  </>
                )}
              </Col>
            </Row>
            <Row className='mt-3'>
              <Table variant='flush' hover responsive >
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Title</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                {order.orderItems.map((item, index) => (
                  <tbody key={index}>
                    <tr>
                      <td style={{ width: '200px' }}>
                        <Image src={item.cover} alt={item.name} fluid rounded />
                      </td>
                      <td>
                        <Link to={`/details/${item.product}`}>{item.name}</Link>
                      </td>
                      <td> {item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.qty * item.price}</td>
                    </tr>
                  </tbody>
                ))}
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Items Price</td>
                    <td>${order.itemsPrice}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Estimated tax rate</td>
                    <td>12%</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Virtual Delivery</td>
                    <td> Free</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total Price</td>
                    <td>${order.totalPrice}</td>
                  </tr>
                </tfoot>
              </Table>
            </Row>
          </>
        )
      }
    </>
  )
}
export default OrderScreen