import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Row,
  Col,
  Image,
  Button,
  Form,
  Badge,
  Tabs,
  Tab,
  ListGroup
} from 'react-bootstrap'
import Meta from "../components/Meta";
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import ScrollToTop from "../components/ScrollToTop";
import DescriptionScreen from "./_detail_screen/DescriptionScreen"
import HighlightScreen from './_detail_screen/HighlightScreen'
import ReviewScreen from './_detail_screen/ReviewScreen'
import { listProductDetails } from '../actions/productActions'
import { PRODUCT_DETAILS_RESET } from "../constants/productConstants";

const DetailScreen = () => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [qty, setQty] = useState(1)

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch({ type: PRODUCT_DETAILS_RESET })
    dispatch(listProductDetails(id))
  }, [id, dispatch])

  const addCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`)
  }

  return (
    <>
      <ScrollToTop />
      <Link className='btn btn-secondary my-5' to='/'>
        Back to Home
      </Link>
      {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
        (
          <>
            <Meta title={product.name} />
            <Row>
              <Col md={7}>
                <Image src={product.cover} alt={product.name} fluid />
              </Col>
              <Col md={4}>
                <Col as='h4'>{product.name}</Col>
                <Col>
                  <Badge pill bg="success" text='dark' as='title'>{product.tag}</Badge>
                  &nbsp;
                  <Badge pill bg="success" text='dark' as='title'>{product.category}</Badge>
                </Col>
                <big>
                  <Col style={{ color: '#FF6666' }}>${product.price} sale</Col>
                </big>

                <small>
                  <Col>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </Col>
                  <Col style={{ color: 'lightblue' }}>{product.countInStock > 0 ? 'in stock' : 'out of stock'}</Col>
                  <br />
                  <ListGroup >
                    <ListGroup.Item variant="warning">
                      <i className="fa-solid fa-truck-fast">&nbsp;&nbsp;</i>
                      Virtual Delivery: Free
                    </ListGroup.Item>
                    <ListGroup.Item variant="info">
                      <i className="fa-solid fa-blog">&nbsp;&nbsp;</i>
                      Get Redeem Code to Email
                    </ListGroup.Item>
                  </ListGroup>

                  <small >
                    <Col className="mt-5">RELEASE DATE：{product.releasedate}</Col>
                    <Col>DEVELOPER:：{product.developer}</Col>
                    <Col>PUBLISHER：{product.publisher}</Col>
                  </small>

                  <Row className="mt-4">
                    <Col xs={1}>Qty.</Col>
                    <Col xs={2}>
                      <Form.Control
                        as='select'
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        size='sm'
                      >
                        {[...Array(product.countInStock).keys()].map((i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col xs={{ span: 6 }}>
                      <Button
                        onClick={addCartHandler}
                        className='btn-block'
                        type='button'
                        disabled={product.countInStock === 0}
                        size='sm'
                        style={{ width: '18em', color: 'black' }}
                        variant='success'
                      >
                        Add to Cart
                      </Button>
                    </Col>
                  </Row>
                </small>
              </Col>
            </Row>

            {/* ABOUT section */}
            <Row className="mt-5 justify-content-md-center" as='h5' >
              About This Game
            </Row>
            <Tabs defaultActiveKey="description" id="about-product" className="mb-3 mt-3" fill>
              <Tab eventKey="description" title="Description">
                <DescriptionScreen description={product.description} />
              </Tab>
              <Tab eventKey="hightlights" title="Hightlights">
                <HighlightScreen highlights={product.highlight} />
              </Tab>
              <Tab eventKey="reviews" title="Reviews">
                <ReviewScreen reviews={product.reviews} />
              </Tab>
            </Tabs>
          </>
        )
      }
    </ >
  )
}

export default DetailScreen