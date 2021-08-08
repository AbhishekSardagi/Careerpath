import axios from "axios";
import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from "./actionTypes";

export const SingleCourseReq = () => {
  // requesting single data
  return {
    type: GET_REQUEST,
  };
};

//get success request
export const SingleCourseSuccess = (payload) => {
  return {
    type: GET_SUCCESS,
    payload,
  };
};

export const SingleCourseFailure = () => {
  return {
    type: GET_FAILURE,
  };
};

export const courseDetails = () => async (dispatch) => {
  dispatch(SingleCourseReq());
  try {
    let res = await axios.get("https://abhisheksardagi.herokuapp.com/stage1d");
    dispatch(SingleCourseSuccess(res.data));
    console.log(res.data);
  } catch (error) {
    dispatch(SingleCourseFailure());
  }
};
