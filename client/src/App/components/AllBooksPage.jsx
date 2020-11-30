import React, { useEffect } from "react";
import LinkList from "../components/LinkList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBooks } from "../../redux/book/bookActions";

const BOOK_DETAIL_LINK_PREFIX = "/book/";
const AllBooksPage = () => {
  const { allBooks } = useSelector((state) => state.bookData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllBooks());
  }, [dispatch]);
  return (
    <>
      <h2>Available Books</h2>
      <LinkList
        linkCollection={allBooks}
        linkPrefix={BOOK_DETAIL_LINK_PREFIX}
      ></LinkList>
    </>
  );
};
export default AllBooksPage;
