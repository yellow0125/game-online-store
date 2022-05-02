import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Carousel, Image, Col } from 'react-bootstrap'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

const Banner = () => {

  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { error, products } = productTopRated
  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <>
      {error && <Message variant='danger'>{error}</Message>}
      <Col sm={12} md={10} lg={8} xl={6}>
        <Carousel pause='hover'>
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/details/${product._id}`}>
                <Image src={product.cover} alt={product.name} />
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
    </>
  )
}

export default Banner