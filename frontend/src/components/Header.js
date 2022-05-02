import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from "../actions/userActions";

const Header = () => {

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  const [searchCriteria, setSearchCriteria] = useState('')
  let navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchCriteria.trim()) {
      navigate(`/search/${searchCriteria}`)
      setSearchCriteria('')
    }
    else {
      navigate('/search')
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container >
          <LinkContainer to='/' aria-label='webIcon'>
            <Navbar.Brand>
              <i className='fas fa-gamepad fa-lg'>&nbsp;</i>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <LinkContainer to='/' id='linkToHome'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products' id='linkToNewProduct'>
                <Nav.Link>What's new</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products/top' id='linkToTopProduct'>
                <Nav.Link>Top Sellers</Nav.Link>
              </LinkContainer>

              <LinkContainer to='/ad' id='linkToAds'>
                <Nav.Link>Weekly Ad</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Categories" id="navbarDropdown">
                <NavDropdown.Item href="#action3">RPG</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Strategy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  All of the nav are Not Implemented
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            {/* Search Begins! */}
            <Form className="d-flex mx-auto" onSubmit={handleSearch} style={{ position: 'blocked' }}>
              <FormControl
                as='input'
                placeholder="search"
                size='sm'
                value={searchCriteria}
                onChange={e => setSearchCriteria(e.target.value)}
              />
              <Button aria-label='searchButton' type='submit' variant="dark" size='sm' >
                <i className='fa fa-magnifying-glass'></i>
              </Button>
            </Form>
            {/* Search Ends! */}
            <Nav className='ms-auto'>
              {userInfo ? (
                <>
                  <LinkContainer to='/profile' aria-label='userIcon'>
                    <Nav.Link>
                      <i className="fa-solid fa-user-astronaut" />
                    </Nav.Link>
                  </LinkContainer>
                  <NavDropdown title={userInfo.name} id="username" style={{ marginLeft: '-10px' }}>
                    <small><NavDropdown.Item href="/profile">My Profile</NavDropdown.Item></small>
                    {userInfo.isAdmin && <small><NavDropdown.Item href="/admin/product">Product List</NavDropdown.Item></small>}
                    <NavDropdown.Divider />
                    <small><NavDropdown.Item onClick={logoutHandler}>
                      Sign out
                    </NavDropdown.Item></small>
                  </NavDropdown>
                </>
              ) : (
                <LinkContainer to='/login' aria-label='loginIcon'>
                  <Nav.Link>
                    <i className="fa-solid fa-user-astronaut">&nbsp;</i>
                    Sign in
                  </Nav.Link>
                </LinkContainer>)}
              <LinkContainer to='/cart' aria-label='cartIcon'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart fa-sm'></i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header >
  )
}

export default Header
