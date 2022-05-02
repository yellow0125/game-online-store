import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardGroup } from 'react-bootstrap'
import Rating from './Rating'
import { listMyReview, listReviews } from '../actions/reviewActions'
import Message from './Message'
import Subtitle from './Subtitle'

const Review = () => {

  const dispatch = useDispatch()
  const reviewList = useSelector((state) => state.reviewList)
  const { reviews } = reviewList

  const myReviewList = useSelector((state) => state.myReviewList)
  const { reviews: myreviews } = myReviewList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (!userInfo) {
      dispatch(listReviews())
    } else {
      dispatch(listMyReview())
    }
  }, [dispatch,userInfo])


  return (
    <>
      {userInfo ? (myreviews.length === 0 ? (
        <Message variant='dark'>
          <h4 style={{ color: '	#B0C4DE' }}>You have never written a review.</h4>
          <small style={{ color: '	#C0C0C0' }}>Check out what we're featuring now!</small>
        </Message>
      ) : (
        <>
          <Row className='mt-1' >
            <Col md={{ span: 5 }}>
              <Subtitle text='My Reviews' />
            </Col>
          </Row>
          <CardGroup>
            {myreviews.map((review) => (
              <Card bg="dark" key={review._id}>
                <Card.Body>
                  <Row >
                    <Col style={{ color: '#B0C4DE', fontSize: '12px' }}>
                      <div><i className="fa-solid fa-user-astronaut" /> {review.user.username}</div>
                      {review.createdAt.substring(0, 10)}
                      <Rating value={review.rating} />
                    </Col>
                    <Col md={{ offset: 4 }} xs={{ offset: 4 }}><Link to={`/details/${review.product._id}`}>{review.product.name}</Link></Col>
                  </Row>
                  <p style={{ color: 'silver', fontSize: '14px' }}>{review.review.substring(0, 200) + '...'}</p>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </>
      )) : (
        <>
          <Row className='mt-1' >
            <Col md={{ span: 5 }}>
              <Subtitle text='Customer Reviews' />
            </Col>
          </Row>
          <CardGroup>
            {reviews.map((review) => (
              <Card bg="dark" key={review._id}>
                <Card.Body>
                  <Row >
                    <Col style={{ color: '#B0C4DE', fontSize: '12px' }}>
                      <div><i className="fa-solid fa-user-astronaut" /> {review.user.username}</div>
                      {review.createdAt.substring(0, 10)}
                      <Rating value={review.rating} />
                    </Col>
                    <Col md={{ offset: 4 }} xs={{ offset: 4 }}><Link to={`/details/${review.product._id}`}>{review.product.name}</Link></Col>
                  </Row>
                  <p style={{ color: 'silver', fontSize: '14px' }}>{review.review.substring(0, 200) + '...'}</p>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </>
      )}
    </>
  )
}

export default Review