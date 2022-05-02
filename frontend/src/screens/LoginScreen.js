import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createBrowserHistory } from "history";
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { login } from "../actions/userActions";

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const history = createBrowserHistory();

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin
  const redirect = history.location.search ? history.location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      navigate(redirect)
    }
  }, [navigate, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <>
      <FormContainer>
        <h3>Welcome Back</h3>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='email' >
            <Form.Label className='mt-2'>Email Address</Form.Label>
            <Form.Control
           
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='password'>
            <Form.Label className='mt-2'>Password</Form.Label>
            <Form.Control
             
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <br />
            <Button type='submit' variant='success' style={{ color:'black' , width: '10rem' }} className='mt-3'>
              Go Ahead
            </Button>
          </Form.Group>
        </Form>
        <Row className='py-3'>
          <Col>
            Don't have an account?
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>
              Create One!
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  )
}

export default LoginScreen