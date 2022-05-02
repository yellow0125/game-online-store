import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from "../actions/userActions";

const RegisterScreen = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const history = createBrowserHistory();
  const redirect = history.location.search ? history.location.search.split('=')[1] : '/'

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('The passwords entered twice are inconsistent')
    } else {
      dispatch(register(username, email, password))
    }
  }

  return (
    <FormContainer>
      <h3>Create Your Account</h3>
      {message && <Message variant='danger'>{message}</Message>}
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='username'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='username'
            placeholder='the number of characters is 2 to 12'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='please enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='please enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='confirmPassword'>
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control
            type='password'
            placeholder='please confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <br />
          <Button type='submit' variant='success' style={{ color:'black' , width: '10rem' }}>
            Get Started
          </Button>
        </Form.Group>
      </Form>
      <Row className='py-3'>
        <Col>
          Already have an account?
          <Link to='/login'>
            Sign in!
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen