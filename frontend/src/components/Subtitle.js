import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'

const Subtitle = ({ text }) => {
  return (
    <Navbar bg="" variant=''>
      <Container fluid>
        <Nav.Link>
          <i className="fa-brands fa-battle-net">&nbsp;</i>
         {text}
        </Nav.Link>
      </Container>
    </Navbar>

  )
}

export default Subtitle

