import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'

const AllProductScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
    {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : 
    (
      <>
        <Row className='mt-4 '  >
          <Col>
            <Subtitle text='All Products' />
          </Col>
        </Row>
        <Row className="mx-5 " >
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </>
    )}
  </>
  )
}

export default AllProductScreen