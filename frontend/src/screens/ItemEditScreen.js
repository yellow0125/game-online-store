import React, { useState } from 'react'
// import {Link, useParams,useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
import { Breadcrumb, Form } from 'react-bootstrap'
const ItemEditScreen = () => {

  const [name, setName] = useState('')

  return (
    <>Sorry, the page will coming soon! ItemEditScreen
      <Breadcrumb className='mt-2'>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/profile">Your Profile</Breadcrumb.Item>
        <Breadcrumb.Item href="/admin/product">Product List</Breadcrumb.Item>
        <Breadcrumb.Item active>Product Edit</Breadcrumb.Item>
      </Breadcrumb>
      <Form>
        <Form.Group controlId='name'>
          <Form.Label>name：</Form.Label>
          <Form.Control
            type='name'
            placeholder='Enter product name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
      </Form>










    </>
  )
}

export default ItemEditScreen