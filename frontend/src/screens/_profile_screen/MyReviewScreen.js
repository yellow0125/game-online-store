import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Image, Button, ListGroup } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Message from '../../components/Message'
import Rating from '../../components/Rating';
import { getUserDetails } from '../../actions/userActions';
import { listMyReview } from '../../actions/reviewActions';
import ReadMoreReact from 'read-more-react';

const MyReviewScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const userDetails = useSelector((state) => state.userDetails)
  const { user } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  const myReviewList = useSelector((state) => state.myReviewList)
  const { loading: loadingR, error: errorR, reviews } = myReviewList

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyReview())
      }
    }
  }, [dispatch, navigate, userInfo, user])

  return (
    <Col md={9}>
      {errorR && <Message variant='danger'>{errorR}</Message>}
      {loadingR && <Loader />}
      {reviews ? (reviews.length === 0 ? (
        <Message variant='dark'>
          <h4 style={{ color: '	#B0C4DE' }}>You have never written a review.</h4>
          <small style={{ color: '	#C0C0C0' }}>Check out what we're featuring now!</small>
          <div>
            <Link to='/'><Button
              variant='primary'
              style={{
                width: '350px',
                margin: 'auto',
              }}
              className='mt-2'

            >Go to Homepage</Button></Link></div>
        </Message>
      ) : (
        <>
          <ListGroup >
            {reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <Row>
                  <Col style={{ color: '#B0C4DE', fontSize: '7px' }}>
                    <Image
                      src={review.product.cover}
                      alt={review.product.name}
                      fluid rounded
                      style={{ width: '150px' }} />

                    <div>{review.product.name}</div>
                    <div>POSTED: {review.createdAt.substring(0, 10)}</div>
                    <Rating value={review.rating} />
                  </Col>
                  <Col style={{ color: 'lightgrey', fontSize: '13px' }}>
                    <ReadMoreReact text={review.review}
                      min={100}
                      ideal={200}
                      max={2000}
                      readMoreText='CLICK HERE TO READ MORE' />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>


        </>
      )) : (<Message>No Review in db.</Message>)
      }

    </Col >

  )
}

export default MyReviewScreen
