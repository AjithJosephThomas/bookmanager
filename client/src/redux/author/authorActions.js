import axios from "axios";
import { ServiceEnpoint } from "../../apiConstant";
import {
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_ALL_AUTHORS_FAILURE,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
  SHOW_INPROGRESS,
  CREATE_BOOK_SUCCESS,
  CREATE_BOOK_FAILURE,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILURE,
} from "./authorActionTypes";
const showInProgress = () => ({
  type: SHOW_INPROGRESS,
});
const fetchAuthorSuccess = (books) => ({
  type: FETCH_AUTHOR_SUCCESS,
  payload: authors,
});
const fetchAuthorsFailure = (errorMessage) => ({
  type: FETCH_AUTHOR_FAILURE,
  payload: { errorMessage },
});

const createBookSuccess = (book) => ({
  type: CREATE_BOOK_SUCCESS,
  payload: book,
});

const createBookFailure = (errorMessage) => ({
  type: CREATE_BOOK_FAILURE,
  payload: { errorMessage },
});
export const createBook = (book) => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const book = await axios.post(`${ServiceEnpoint.BOOK}`);
    dispatch(createBookSuccess(book));
  } catch (error) {
    dispatch(createBookFailure(error.message));
  }
};

export const fetchAllBooks = () => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const response = await axios.get(ServiceEnpoint.BOOK);
    const books = response.data;
    dispatch(fetchAllBooksSuccess(books));
  } catch (error) {
    dispatch(fetchAllBookFailure(error.message));
  }
};
