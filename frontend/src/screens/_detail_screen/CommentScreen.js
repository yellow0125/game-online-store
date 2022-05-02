import React from 'react'
import { Row, Col } from 'react-bootstrap'

const CommentScreen = ({ description }) => {
    return (
        <>
            <Row className="mt-5">
                Comments
            </Row>
            <Row className="mt-5">
                <Col>{description}</Col>
            </Row>
        </>
    )
}

export default CommentScreen