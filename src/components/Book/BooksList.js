import React from "react";

const BooksList = ({ isLoading, booksData }) => {
  const BookList = booksData?.map((book) => (
    <li
      key={book.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <div>{book.title}</div>
      <div className="btn-group" role="group">
        <button type="button" className="btn btn-primary">
          Read
        </button>
        <button type="button" className="btn btn-danger">
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
