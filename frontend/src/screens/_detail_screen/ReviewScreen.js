import React, { useState, useEffect, useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ScrollTo } from "react-scroll-to";
import ReadMoreReact from 'read-more-react';
import { Row, ListGroup, Form, Button, Col } from 'react-bootstrap'
import Rating from '../../components/Rating'
import Message from '../../components/Message'
import { listProductDetails, addReview } from '../../actions/productActions'

const ReviewScreen = ({ reviews }) => {
    const { id: productId } = useParams()
    const [rating, setRating] = useState(0)
    const [review, setReview] = useState('')
    const reviewRef = useRef(null)
    const noReviewRef = useRef(null)

    const dispatch = useDispatch()
    const productAddReview = useSelector(state => state.productAddReview)
    const { success, error } = productAddReview

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (success) {
            setRating(0)
            setReview('')
        }
        dispatch(
            listProductDetails(productId)
        )
        // console.log(noReviewRef.current);
        // reviewRef.current.focus()
        // noReviewRef.current.focus()
    }, [dispatch, success, productId])

    const submitReview = (e) => {
        e.preventDefault()
        dispatch(
            addReview(productId, { rating, review })
        )
    }

    return (
        <>
            {/* ROW 1 : title */}
            <Row className="mt-5">
                <Col>Guest Ratings &amp; Reviews</Col>

            </Row>
            {/* ROW 2 : review list */}
            <Row className="mt-3">
                {error && <Message variant='danger'>{error}</Message>}
                {reviews ? (reviews.length === 0 ?
                    (<Message variant='dark'>
                        <h4
                            style={{ color: '	#B0C4DE' }}
                            tabIndex='0'
                            ref={noReviewRef}
                        >There is no review for this product</h4>
                        <small style={{ color: '	#C0C0C0' }}>
                            You can write your own review for this product to share your
                            experience with the community.
                        </small>
                    </Message>) : (
                        <>
                            <ScrollTo>
                                {({ scroll }) => (
                                    <Button
                                        className='bg-info mb-4'
                                        style={{ width: '25em', fontSize: '16px' }}

                                        onClick={() => scroll({ x: 20, y: 10000 })}
                                    >Write a Review</Button>)}
                            </ScrollTo>
                            <ListGroup variant='flush'>
                                {reviews.map((review) => (
                                    <ListGroup.Item key={review._id}
                                        tabIndex='0' ref={reviewRef}>
                                        <small>
                                            <Row>
                                                <Col style={{ color: '#B0C4DE', fontSize: '17px' }}><i className="fa-solid fa-user-astronaut" /> {review.username}</Col>
                                                <Col md={{ offset: 10 }} style={{ color: 'grey' }}>POSTED: {review.createdAt.substring(0, 10)}</Col>
                                            </Row>
                                            <Rating value={review.rating} /></small>
                                        <ReadMoreReact
                                            className='mt-4'
                                            text={review.review}
                                            min={500}
                                            ideal={600}
                                            max={2000}
                                            readMoreText='CLICK HERE TO READ MORE' />
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </>)) : (<Message>No Reviews.</Message>)
                }
            </Row>

            {/* ROW 3 :  add new review title*/}
            <Row className="mt-5" as='p'>
                New Review
            </Row>

            {/* ROW 4 :  form*/}
            <Row>
                {userInfo ? (
                    <Form onSubmit={submitReview} >
                        {/* rating */}
                        <Form.Group>
                            <Form.Label htmlFor='selectRating'>Rating:</Form.Label>
                            <Form.Control
                                as='select'
                                id='selectRating'
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                required
                            >
                                <option value=''>Please Select</option>
                                <option value='5'>5 - Very Satisfied</option>
                                <option value='4'>4 - Satisfied</option>
                                <option value='3'>3 - Neutral</option>
                                <option value='2'>2 - Unsatisfied</option>
                                <option value='1'>1 - Very Unsatisfied</option>
                            </Form.Control>
                        </Form.Group>

                        {/* review */}
                        <Form.Group className='mt-5'>
                            <Form.Label htmlFor='reviewInput'>Review:</Form.Label>
                            <Form.Control
                                id='reviewInput'
                                as='textarea'
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                                required
                            >
                            </Form.Control>
                        </Form.Group>

                        {/* submit button */}
                        <Button type='submit' className='mt-5 bg-info'>
                            Submit
                        </Button>
                    </Form>) : (
                    <Link to='/login' aria-label='login button'><Message>Please Login to write new review.</Message></Link>
                )}
            </Row>
        </>
    )
}

export default ReviewScreen