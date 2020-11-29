import {

  CREATE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_SUCCESS,
  FETCH_AUTHOR_SUCCESS,
  FETCH_ALL_AUTHORS_SUCCESS,
} from "./authorActionTypes";

const initialState = {
  allAuthors: [],
  allAuthorsNameVals:[],
  currAuthor: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
  
    case FETCH_ALL_AUTHORS_SUCCESS:
      const {allAuthors,allAuthorsNameVals} = payload;      
      return {
        ...state,
        allAuthors,
        allAuthorsNameVals
      };
    case FETCH_AUTHOR_SUCCESS:      
      const currAuthor = payload;
      return {
        ...state,
        currAuthor
      };
    case CREATE_AUTHOR_SUCCESS:
      
      return {
        ...state,
      };
    case UPDATE_AUTHOR_SUCCESS:
      
      return {
        ...state,
      };
    case DELETE_AUTHOR_SUCCESS:
      
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
