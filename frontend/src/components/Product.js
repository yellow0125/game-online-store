import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 py-3 rounded bg-dark' >
        <Link to={`/details/${product._id}`}>
          <Card.Img src={product.cover} variant='top' alt={product.name}/>
        </Link>
        <Card.Body>
          <Link to={`/details/${product._id}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Card.Text as='div'>
            <Rating value={product.rating} text={` ${product.numReviews} views`}/>
          </Card.Text>
          <Card.Text as='h4'>${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Product