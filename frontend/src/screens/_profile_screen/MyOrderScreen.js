import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Image, Table, Button } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import { getUserDetails } from '../../actions/userActions';
import { listMyOrder } from '../../actions/orderAction'

const MyorderScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const orderListMy = useSelector((state) => state.orderListMy)
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrder())
      }
    }
  }, [dispatch, navigate, userInfo, user])

  return (
    <Col md={9}>
      {errorOrders && <Message variant='danger'>{errorOrders}</Message>}
      {loadingOrders && <Loader />}
      {orders ? (orders.length === 0 ? (
        <Message variant='dark'>
          <h4 style={{ color: '	#B0C4DE' }}>You have never placed an order</h4>
          <small style={{ color: '	#C0C0C0' }}>Check out what we're featuring now!</small>
          <div>
            <Link to='/'><Button
              variant='primary'
              style={{
                width: '350px',
                margin: 'auto',
              }}
              className='mt-2'

            >Go to Homepage</Button></Link></div>
        </Message>
      ) : (
        <>
          {orders.map((order) => (
            <Fragment key={order._id}>
              <Row style={{ color: 'white', fontSize: '14px' }}>
                <Col>
                  <Row>Order Placed {order.createdAt.substring(5, 10)}</Row>
                </Col>
                <Col>
                  <Row>Total {order.totalPrice}</Row>
                </Col>
                <Col md={{ offset: 1 }}>#{order._id}</Col>
                <Col><Link to={`/order/${order._id}`}>View order details</Link></Col>
              </Row>
              {order.orderItems.map((item, index) => (
                <Table key={index}>
                  <tbody >
                    <tr>
                      <td style={{ width: '150px' }}>
                        <Image src={item.cover} alt={item.name} fluid rounded />
                      </td>
                      <td>{item.name}</td>
                    </tr>
                  </tbody>
                </Table>
              ))}
            </Fragment>
          ))
          }
        </>
      )) : (<Message>No Orders in db.</Message>)
      }

    </Col >

  )
}

export default MyorderScreen
