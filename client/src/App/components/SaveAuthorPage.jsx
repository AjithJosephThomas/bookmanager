import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createAuthor, updateAuthor } from "../../redux/author/authorActions";
import { Form } from '../../style';
const SaveAuthorForm = () => {

  const { authorId } = useParams();

  const { register, handleSubmit } = useForm();
  const { currAuthor,successMessage } = useSelector((state) => state.authorData);
  const dispatch = useDispatch();

  const onSubmit = ({ first_name, last_name }) => {
    if (authorId) {
      const id = authorId;
     
      dispatch(updateAuthor({ id, first_name, last_name }));
    } else {
      dispatch(createAuthor({ first_name, last_name }));
    }
  };

  return (
    <>
      {authorId ? <h2>Update author</h2> : <h2>Create Author</h2>}
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
        <label>First Name</label>
        <input
          name="first_name"
          type="text"
          defaultValue={currAuthor ? currAuthor.first_name : ""}
          ref={register({ required: true, maxLength: 20 })}
        />
        <label>Last Name</label>
        <input
          name="last_name"
          type="text"
          defaultValue={currAuthor ? currAuthor.last_name : ""}
          ref={register({ required: true, maxLength: 20 })}
        />
        <input type="submit" />
      </Form>
      {successMessage ? <span>{successMessage}</span> : null}
    </>
  );
};
export default SaveAuthorForm;
