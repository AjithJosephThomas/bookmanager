import React, { useEffect } from "react";

import Select from "react-select";
import { useParams } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import {createBook,updateBook} from '../../redux/book/bookActions';
import { fetchAllAuthors } from "../../redux/author/authorActions";

const SaveBookForm = () => {
  console.log(useParams());
  const { bookId } = useParams();

  const { control, register, handleSubmit } = useForm();
  const { allAuthorsNameVals } = useSelector((state) => state.authorData);
  const { currBook, successMessage } = useSelector((state) => state.bookData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllAuthors());
  }, []);

  const onSubmit = ({ author, name, isbn }) => {
    
    const author_id = author.value;
    if (bookId) {
      const id = bookId;
      dispatch(updateBook({ id, name, isbn, author_id }));
    } else {
      dispatch(createBook({ name, isbn, author_id }));
    }
  };

  return (
   <> <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        name="name"
        defaultValue={currBook?currBook.name:""}
        ref={register({ required: true, maxLength: 20 })}
      />
      <label>isbn</label>
      <input
        name="isbn"
        defaultValue={currBook?currBook.isbn:""}
        ref={register({ required: true, maxLength: 20 })}
      />
      <label>Author</label>
      <Controller
        name="author"
        as={Select}
        options={allAuthorsNameVals}
        control={control}
        rules={{ required: true }}
        defaultValue={currBook?allAuthorsNameVals.find(item=>item.value===currBook.author_id):null}
      />
      <input type="submit" />
    </form>
  {successMessage?<span>{successMessage}</span>:null}
    </>
  );
};
export default SaveBookForm;
