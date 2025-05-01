import React, { Fragment } from "react";

const BookInfo = ({ info }) => {
  const { title, description, price } = info;
  return (
    <Fragment>
      <h2>Book Details</h2>
      {Object.keys(info).length > 0 ? (
        <div>
          <p className="fw-bold">Title: {title}</p>
          <p className="fw-light">Description: {description} </p>
          <p className="fst-italic">Price: {price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
