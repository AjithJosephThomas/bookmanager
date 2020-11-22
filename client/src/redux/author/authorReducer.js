import {
  SHOW_AUTHOR_INPROGRESS,
  FETCH_AUTHOR_SUCCESS,
  CREATE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHORS_SUCCESS,
} from "./authorActionTypes";
const initialState = {
  allAuthors: [],
  author: null,
  isServiceCallInProgress: false,
  errorMessage: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SHOW_AUTHOR_INPROGRESS:
      return { ...state, isServiceCallInProgress: true, errorMessage: null };
    case FETCH_ALL_AUTHORS_SUCCESS:
      const allAuthors = payload;
      return {
        ...state,
        allAuthors,
        isServiceCallInProgress: false,
        errorMessage: null,
      };
    case FETCH_AUTHOR_SUCCESS:
      const { author } = payload;
      return {
        ...state,
        author,
        isServiceCallInProgress: false,        
        errorMessage: null,
      };
    case CREATE_AUTHOR_SUCCESS:
      const { author } = payload;
      return {
        ...state,
        allAuthors,
        isServiceCallInProgress: false,        
        errorMessage: null
      };
    case UPDATE_AUTHOR_SUCCESS:
      const { author } = payload;
      return {
        ...state,
        allAuthors,
        isServiceCallInProgress: false,        
        errorMessage: null
      };
    case DELETE_AUTHOR_SUCCESS:
      const { author } = payload;
      return {
        ...state,
        allAuthors,
        isServiceCallInProgress: false,        
        errorMessage: null
      };
    default:
      return state;
  }
};

export default reducer;
