import axios from "axios";
import { ServiceEnpoint } from "../../apiConstant";
import {
  FETCH_ALL_BOOKS_SUCCESS,
  FETCH_BOOK_SUCCESS,  
  CREATE_BOOK_SUCCESS,  
  UPDATE_BOOK_SUCCESS,
  DELETE_BOOK_SUCCESS,
  SHOW_INPROGRESS,
} from "./bookActionTypes";
const showInProgress = () => ({
  type: SHOW_INPROGRESS,
});

const createBookSuccess = (book) => ({
  type: CREATE_BOOK_SUCCESS,
  payload: book,
});

export const createBook = (book) => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const book = await axios.post(`${ServiceEnpoint.BOOK}`);
    dispatch(createBookSuccess(book));
  } catch (error) {

  }
};
const updateBookSuccess = (book) => ({
  type: UPDATE_BOOK_SUCCESS,
  payload: book,
});

export const updateBook = (book) => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const book = await axios.post(`${ServiceEnpoint.BOOK}`);
    dispatch(updateBookSuccess(book));
  } catch (error) {

  }
};
const deleteBookSuccess = (book) => ({
  type: DELETE_BOOK_SUCCESS,
  payload: book,
});

export const deleteBook = (book) => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const book = await axios.post(`${ServiceEnpoint.BOOK}`);
    dispatch(deleteBookSuccess(book));
  } catch (error) {

  }
};
const fetchBookSuccess = (book) => ({
  type: FETCH_BOOK_SUCCESS,
  payload: book,
});

export const fetchBook = (book) => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const book = await axios.post(`${ServiceEnpoint.BOOK}`);
    dispatch(fetchBookSuccess(book));
  } catch (error) {

  }
};
const fetchAllBooksSuccess = (books) => ({
  type: FETCH_ALL_BOOKS_SUCCESS,
  payload: books,
});
export const fetchAllBooks = () => async (dispatch) => {
  try {
    dispatch(showInProgress());
    const response = await axios.get(ServiceEnpoint.BOOK);
    const books = response.data;
    dispatch(fetchAllBooksSuccess(books));
  } catch (error) {
  }
};
