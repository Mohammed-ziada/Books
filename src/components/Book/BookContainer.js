import React, { Fragment, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";
import "./book.css";

const PostContainer = () => {
  const { isLoading, books } = useSelector((state) => state.books);
  // console.log(books);
  const [selectedBook, setBookSelected] = useState({});
  const getBook = (id) => {
    const selectedBookwithid = books.find((book) => book.id === id);
    if (!selectedBookwithid) {
      setBookSelected({});
      return;
    }
    setBookSelected(selectedBookwithid);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  useEffect(() => {
    if (selectedBook?.id) {
      const exists = books.some((book) => book.id === selectedBook.id);
      if (!exists) {
        setBookSelected({});
      }
    }
  }, [books, selectedBook]);
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            booksData={books}
            getBook={getBook}
          />
        </div>
        <div className="col side-line">
          <BookInfo info={selectedBook} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
