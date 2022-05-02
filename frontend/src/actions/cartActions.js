import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from '../constants/cartConstants'
import axios from 'axios'

//action of add to cart
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/products/${id}`)

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      cover: data.cover,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

//action of delete item from cart
export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}