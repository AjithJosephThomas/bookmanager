import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchBookDetails } from "../../redux/book/bookActions";
const BOOK_DETAIL_LINK_PREFIX = "/book/";
const BookDetailPage = () => {
  const { currBook } = useSelector((state) => state.bookData);

  const { bookId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookDetails(bookId));
  }, []);

  return (
    <>
      <h2>Book Details</h2>
      {currBook !== null ? (
        <>
          <dl>
            <dt>Name</dt>
            <dd>{currBook.name}</dd>
            <dt>ISBN</dt>
            <dd>{currBook.isbn}</dd>
            <dt>Author</dt>
            <dd>
              {currBook.first_name} {currBook.last_name}
            </dd>
          </dl>
          <div>
            <Link to={`${BOOK_DETAIL_LINK_PREFIX}${currBook.id}/update`}>Update</Link>
          </div>
        </>
      ) : (
        <span>No details available.</span>
      )}
    </>
  );
};
export default BookDetailPage;
