import {
  CREATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  FETCH_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
  FETCH_ALL_BOOKS_SUCCESS,
  SHOW_INPROGRESS,
} from "./bookActionTypes";
const initialState = {
  books: [],
  selectedBook: null,
  isServiceCallInProgress: false,
  errorMessage: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SHOW_INPROGRESS:
      return { ...state, isServiceCallInProgress: true, errorMessage: null };
      case FETCH_ALL_BOOKS_SUCCESS:
        const book = payload;
        const books = [...state.books, book];
        return {
          ...state,
          books,
          isServiceCallInProgress: false,
          errorMessage: null,
      };
      case FETCH_BOOK_SUCCESS:
      const book = payload;
      const books = [...state.books, book];
      return {
        ...state,
        books,
        isServiceCallInProgress: false,
        errorMessage: null,
    };
    case CREATE_BOOK_SUCCESS:
      const book = payload;
      const books = [...state.books, book];
      return {
        ...state,
        books,
        isServiceCallInProgress: false,
        errorMessage: null,
      };
    case UPDATE_BOOK_SUCCESS:
      const book = payload;
      return {
        ...state,
        books,
        isServiceCallInProgress: false,
        errorMessage: null,
      };
    case DELETE_BOOK_SUCCESS:
      const book = payload;
      return {
        ...state,
        books,
        isServiceCallInProgress: false,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default reducer;
