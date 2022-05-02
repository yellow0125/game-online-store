import {
  REVIEW_ALL_FAIL,
  REVIEW_ALL_REQUEST,
  REVIEW_ALL_SUCCESS,
  REVIEW_MY_FAIL,
  REVIEW_MY_REQUEST,
  REVIEW_MY_SUCCESS
} from "../constants/reviewConstants"
import axios from 'axios'

export const listReviews = () => async (
  dispatch
) => {
  try {
    dispatch({ type: REVIEW_ALL_REQUEST })
    const { data } = await axios.get('/users/reviews')
    // console.log(data)
    dispatch({ type: REVIEW_ALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: REVIEW_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listMyReview  = () => async (dispatch, getState) => {
  try {
    dispatch({ type: REVIEW_MY_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/users/myreviews`, config)
    dispatch({ type: REVIEW_MY_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: REVIEW_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}