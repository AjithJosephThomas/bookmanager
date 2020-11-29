import axios from "axios";
import { ServiceEndpoint } from "../../apiConstant";
import {
  FETCH_ALL_AUTHORS_SUCCESS,
  FETCH_AUTHOR_SUCCESS,
  CREATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_SUCCESS,
} from "./authorActionTypes";

const fetchAllAuthorsSuccess = (allAuthors) => {
  const allAuthorsNameVals = allAuthors.map(
    ({ first_name, last_name, id }) => ({
      label: `${first_name} ${last_name}`,
      value: id,
    })
  );

  return {
    type: FETCH_ALL_AUTHORS_SUCCESS,
    payload: { allAuthors, allAuthorsNameVals },
  };
};
const fetchAuthorDetailsSuccess = (currAuthor) => ({
  type: FETCH_AUTHOR_SUCCESS,
  payload: currAuthor,
});

const createAuthorSuccess = (author) => ({
  type: CREATE_AUTHOR_SUCCESS,
  payload: author,
});
const updateAuthorSuccess = (author) => ({
  type: UPDATE_AUTHOR_SUCCESS,
  payload: author,
});
export const createAuthor = (author) => async (dispatch) => {
  try {
    //dispatch(showInProgress());
    const author = await axios.post(`${ServiceEndpoint.AUTHOR}`);
    dispatch(createAuthorSuccess(author));
  } catch (error) {}
};
export const updateAuthor = (author) => async (dispatch) => {
  try {
    //dispatch(showInProgress());
    const author = await axios.put(`${ServiceEndpoint.AUTHOR}`);
    dispatch(updateAuthorSuccess(author));
  } catch (error) {}
};
export const fetchAllAuthors = () => async (dispatch) => {
  try {
    //  dispatch(showInProgress());
    const response = await axios.get(ServiceEndpoint.AUTHOR);
    const { data } = response;
    dispatch(fetchAllAuthorsSuccess(data));
  } catch (error) {}
};
export const fetchAuthorDetails = (authorId) => async (dispatch) => {
  try {
    const url = `${ServiceEndpoint.AUTHOR}/${authorId}`;
    const response = await axios.get(url);
    const { data } = response;
    dispatch(fetchAuthorDetailsSuccess(data));
  } catch (error) {
    console.log(error);
  }
};
