import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer data-testid="footer">
      <Container>
        <Row>
          <Col className='text-center py-3 mt-4' style={{ fontSize: '14px' }}>&copy;  2022 FridayNight Brands, Inc.</Col>
        </Row>
        <Col className='text-center' style={{ fontSize: '25px' }}><i className="fa-solid fa-dragon"></i></Col>
        <Col className='text-center'>Expect More, Pay Less.</Col>
      </Container>
    </footer>
  )
}

export default Footer
