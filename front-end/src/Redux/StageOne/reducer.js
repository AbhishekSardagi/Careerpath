import { GET_FAILURE, GET_REQUEST, GET_SUCCESS } from "./actionTypes";

const init = {
  singlecoursedata: [],
  isLoading: false,
  isError: false,
};

export const singlecourcereducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singlecoursedata: payload,
      };
    default:
      return state;
  }
};
