import axios from "axios";
import { ServiceEndpoint } from "../../apiConstant";
import {
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_BOOK_SUCCESS,
  CREATE_BOOK_SUCCESS,
  UPDATE_BOOK_SUCCESS,
} from "./bookActionTypes";

const fetchAllBooksSuccess = (allBooks) => ({
  type: FETCH_ALL_BOOKS_SUCCESS,
  payload: allBooks,
});
const fetchBookDetailsSuccess = (currBook) => ({
  type: FETCH_BOOK_SUCCESS,
  payload: currBook,
});

const createBookSuccess = (message) => ({
  type: CREATE_BOOK_SUCCESS,
  payload: message,
});
const updateBookSuccess = (message) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: message,
});

export const createBook = (book) => async (dispatch) => {
  try {
    //dispatch(showInProgress());
    const { data } = await axios.post(`${ServiceEndpoint.BOOK}`, book);
    dispatch(createBookSuccess(data));
  } catch (error) {}
};
export const updateBook = (book) => async (dispatch) => {
  try {
    //dispatch(showInProgress());
    const { data } = await axios.put(
      `${ServiceEndpoint.BOOK}/${book.id}`,
      book
    );

    dispatch(updateBookSuccess(data));
  } catch (error) {}
};

export const fetchAllBooks = () => async (dispatch) => {
  try {
    //  dispatch(showInProgress());
    const response = await axios.get(ServiceEndpoint.BOOK);
    const { data } = response;
    dispatch(fetchAllBooksSuccess(data));
  } catch (error) {}
};
export const fetchBookDetails = (bookId) => async (dispatch) => {
  try {
    const url = `${ServiceEndpoint.BOOK}/${bookId}`;
    const response = await axios.get(url);
    const { data } = response;
    dispatch(fetchBookDetailsSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
