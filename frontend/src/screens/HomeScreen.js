import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Review from '../components/Review'
import Product from '../components/Product'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Banner from '../components/Banner'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <Meta />
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <main>
            <Row className="justify-content-md-center mt-3 mx-5" >
              <Banner />
            </Row>
            <Row className='mt-1' >
                <Col>
                  <Review/>
                </Col>
            </Row>
            <Row>
              <Col>
                <Subtitle text='Featured &amp; Recommended' />
              </Col>
            </Row>
            <Row className="mx-5 " >
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </main>
        )}

    </>
  )
}

export default HomeScreen