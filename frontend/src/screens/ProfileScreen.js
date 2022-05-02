import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,ListGroupItem, Nav, Tab } from 'react-bootstrap'
import Meta from '../components/Meta'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import MyReviewScreen from './_profile_screen/MyReviewScreen'
import MySettingScreen from './_profile_screen/MySettingScreen'
import MyOrderScreen from './_profile_screen/MyOrderScreen'
import { getUserDetails } from "../actions/userActions";

const ProfileScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [message] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, error, user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
      } else {
        setUsername(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, navigate, userInfo, user])


  return (
    <>
      <Meta title={`Hello, ${user.name}`} />
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Tab.Container id="leftnav" defaultActiveKey="orders">
        <Row>
          <Col md={3}>
            <Row className='mt-5 mb-5'>
              <h3>Hello, {username}</h3>
            </Row>
            <ListGroupItem>
              <i className="fa-solid fa-envelope">&nbsp;</i>Email:&nbsp;{email}
            </ListGroupItem>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="orders"><i className="fa-solid fa-box-open">&nbsp;</i>Orders</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="reviews"><i className="fa-solid fa-star">&nbsp;</i>Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="settings"><i className="fa-solid fa-gear">&nbsp;</i>Settings</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col md={9}>
            <Tab.Content as='div'>
              <Tab.Pane eventKey="orders" aria-labelledby='order'>
                <h3><Subtitle text='Orders History ' /></h3>
                <MyOrderScreen />
              </Tab.Pane>
              <Tab.Pane eventKey="reviews" aria-labelledby='review'>
                <h3><Subtitle text='My Reviews ' /></h3>
                <MyReviewScreen />
              </Tab.Pane>
              <Tab.Pane eventKey="settings" aria-labelledby='set'>
                <h3> <Subtitle text='My Settings ' /></h3>
                <MySettingScreen />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  )
}

export default ProfileScreen