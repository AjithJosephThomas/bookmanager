import React, { useEffect } from "react";

import Select from "react-select";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllAuthors } from "../../redux/author/authorActions";

const SaveAuthorForm = () => {
  const { authorId } = useParams();

  const { control, register, handleSubmit } = useForm();
  
  const dispatch = useDispatch();
  

  const onSubmit = ({ author, name, isbn }) => {
    const author_id = author.id;
    if (bookId) {
      dispatch(updateBook({ id, name, isbn, author_id }));
    } else {
      dispatch(createBook({ name, isbn, author_id }));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name</label>
      <input
        name="first_name"
        defaultValue=""
        ref={register({ required: true, maxLength: 20 })}
      />
      <label>Last Name</label>
      <input
        name="last_name"
        defaultValue=""
        ref={register({ required: true, maxLength: 20 })}
      />
      <input type="submit" />
    </form>
  );
};
export default SaveAuthorForm;
