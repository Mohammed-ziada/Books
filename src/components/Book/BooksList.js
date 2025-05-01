import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooks } from "../../store/bookSlice";
const BooksList = ({ isLoading, booksData, getBook }) => {
  const dispatch = useDispatch();
  const { isLoggedin } = useSelector((state) => state.auth);
  // console.log(booksData);

  const BookList = booksData?.map((book) => (
    <li
      key={book.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>{book.title}</div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => getBook(book.id)}
        >
          Read
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() =>
            dispatch(deleteBooks(book))
              .unwrap()
              .then((originalPromiseResult) => {
                // handle result here
                console.log(originalPromiseResult);
              })
              .catch((rejectedValueOrSerializedError) => {
                // handle error here
                console.log(rejectedValueOrSerializedError);
              })
          }
          disabled={!isLoggedin}
        >
          Delete
        </button>
      </div>
    </li>
  ));
  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <ul className="list-group">{BookList}</ul>
      )}
    </div>
  );
};

export default BooksList;
