import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../actions/productActions'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'

const ProductListScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productDelete = useSelector((state) => state.productDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete

  const productCreate = useSelector((state) => state.productCreate)
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate

  useEffect(() => {
    dispatch({ type: PRODUCT_CREATE_RESET })
    if (!userInfo.isAdmin) {
      navigate('/login')
    } else {
      dispatch(listProducts())
    }
  }, [
    dispatch,
    navigate,
    successDelete,
    successCreate,
    createdProduct,
    userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure')) {
      dispatch(deleteProduct(id))
    }
  }

  const createProductHandler = () => {
    dispatch(createProduct())
  }
  return (
    <>
      <Row>
        <Col>
          <h1 className='mt-4'>Product list</h1>
          <Button
            style={{ color: 'black' }}
            variant='success'
            className='my-2'
            onClick={createProductHandler}>
            Create a Product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant='danger'>{errorCreate}</Message>}
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Table hover responsive className='table-sm bg-dark' >
            <thead>
              <tr>
                <th>ID</th>
                <th>title</th>
                <th>price</th>
                <th>category</th>
                <th>operation</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: '16px', color: 'silver' }}>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                      <Button variant='primary' className='btn-sm'>
                        edit
                      </Button>
                    </LinkContainer>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <Button
                      variant='danger'
                      className='btn-sm'
                      onClick={() => deleteHandler(product._id)}
                      style={{ color: 'black' }}
                    >
                      delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  )
}

export default ProductListScreen
