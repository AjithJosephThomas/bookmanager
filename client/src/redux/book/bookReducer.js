import {
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  FETCH_BOOK_SUCCESS,
  FETCH_ALL_BOOKS_SUCCESS
} from "./bookActionTypes";

const initialState = {
  allBooks: [],
  currBook: null,
  isBookInProgress: false,
  successMessage: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case FETCH_ALL_BOOKS_SUCCESS:
      const allBooks = payload;
      return {
        ...state,
        allBooks,
      };
    case FETCH_BOOK_SUCCESS:
      const currBook = payload;
      return {
        ...state,
        currBook,
      };
    case CREATE_BOOK_SUCCESS:
      return {
        ...state,
        successMessage: payload,
      };
    case UPDATE_BOOK_SUCCESS:
      console.log(payload);
      return {
        ...state,
        successMessage: payload,
      };
    case DELETE_BOOK_SUCCESS:
      return {
        ...state,
        successMessage: payload,
      };
    default:
      return state;
  }
};

export default reducer;
