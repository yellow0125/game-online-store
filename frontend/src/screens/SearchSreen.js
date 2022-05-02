import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button, Image } from 'react-bootstrap'
import Product from '../components/Product'
import Subtitle from '../components/Subtitle'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listSearchProducts } from '../actions/productActions'

const SearchScreen = () => {

  const dispatch = useDispatch()
  const { searchCriteria } = useParams()
  // console.log('search for', searchCriteria);

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList
  // console.log(productList)

  useEffect(() => {
    dispatch(listSearchProducts(searchCriteria))
  }, [dispatch, searchCriteria])

  return (
    <>
      {
        loading ?
          <Loader /> : error ?
            <Message variant='danger'>{error}</Message> :
            searchCriteria ? (products.length === 0 ?
              (
                <Message variant=''>
                  <br className='mt-4' />
                  <br className='mt-4' />
                  <br className='mt-4' />
                  <h2 >Sorry! There is no match for "{searchCriteria}".</h2>
                  <small>Please try another search or ...</small><br /><br />
                  <Link to='/'><Button
                    style={{
                      width: '350px',
                      margin: 'auto',
                    }}
                    className='bg-dark'
                  >Go to Homepage</Button></Link><br />
                  <br className='mt-4' />
                  <Image
                    src={'/images/errorIcon.png'}
                    alt='errorIcon'
                    style={{
                      width: '250px',
                      display: 'block',
                      margin: 'auto',
                    }}
                    fluid rounded />
                </Message>
              ) : (
                <>
                  <Row className='mt-4 '  >
                    <Col>
                      <Subtitle text='Search Result' />
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
              )) :
              (
                <Message variant=''>
                  <br className='mt-4' />
                  <br className='mt-4' />
                  <br className='mt-4' />
                  <h2 >Sorry! The search criteria is empty.</h2>
                  <small>Please try another search or ...</small><br /><br />
                  <Link to='/'><Button
                    style={{
                      width: '350px',
                      margin: 'auto',
                    }}
                    className='bg-dark'
                  >Go to Homepage</Button></Link><br />
                  <br className='mt-4' />
                  <Image
                    src={'/images/errorIcon.png'}
                    alt='errorIcon'
                    style={{
                      width: '250px',
                      display: 'block',
                      margin: 'auto',
                    }}
                    fluid rounded />
                </Message>
              )
      }
    </>
  )
}

export default SearchScreen