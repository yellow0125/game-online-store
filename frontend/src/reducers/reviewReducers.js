import {
  REVIEW_ALL_FAIL,
  REVIEW_ALL_REQUEST,
  REVIEW_ALL_SUCCESS,
  
  REVIEW_MY_FAIL,
  REVIEW_MY_REQUEST,
  REVIEW_MY_SUCCESS
} from "../constants/reviewConstants"

export const reviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case REVIEW_ALL_REQUEST:
      return { loading: true, reviews: [] }
    case REVIEW_ALL_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      }
    case REVIEW_ALL_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export const myReviewListReducer = (state = { reviews: [] }, action) => {
  switch (action.type) {
    case REVIEW_MY_REQUEST:
      return { loading: true, reviews: [] }
    case REVIEW_MY_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
      }
    case REVIEW_MY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}