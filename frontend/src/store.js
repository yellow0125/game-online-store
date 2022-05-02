import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  productListReducer,
  productDeatilsReducer,
  productAddReviewReducer,
  productTopRatedReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,

} from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'
import {
  userDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer

} from './reducers/userReducers'

import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
  orderPayReducer
} from './reducers/orderReducers'


import {
  myReviewListReducer,
  reviewListReducer
} from './reducers/reviewReducers'


const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDeatilsReducer,
  productAddReview: productAddReviewReducer,
  productTopRated: productTopRatedReducer,
  productDelete:productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,
  orderPay: orderPayReducer,
  reviewList: reviewListReducer,
  myReviewList: myReviewListReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
