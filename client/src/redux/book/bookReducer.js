import {
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  FETCH_BOOK_SUCCESS,
  FETCH_BOOK_FAILURE,
  UPDATE_BOOK_FAILURE,
  UPDATE_BOOK_SUCCESS,
  SHOW_BOOK_INPROGRESS
} from "./bookActionTypes";
const initialState = {
  books: [],
  isBookFetchingInProgress: false,
  isBookFetchSuccess: false,
  errorMessage: null,
};

const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case SHOW_INPROGRESS:
      return { ...state, isFetchingInProgress: true, errorMessage: null };
    case FETCH_BOOK_SUCCESS:
      const  books = payload
      return {
        ...state,
        books,       
        isBookFetchSuccess: true,
        isBookFetchingInProgress: false,
        errorMessage: null,
      };
    case FETCH_BOOK_FAILURE:
      return {
        ...state,
        allCapsules: [],      
        isBookFetchSuccess: false,
        isBookFetchingInProgress: false,
        errorMessage: payload.errorMessage,
      };
    default:
      return state;
  }
};

export default reducer;
