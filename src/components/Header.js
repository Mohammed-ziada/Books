import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logInOut } from "../store/authSlice";
const Header = () => {
  const { error } = useSelector((state) => state.books);
  const { isLoggedin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogInOut = () => {
    dispatch(logInOut());
    // alert("Login/Logout")
  };

  // console.log(isLoggedin);
  return (
    <>
      {error && (
        <div className="alert alert-danger mb-0" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => handleLogInOut()}
        >
          {isLoggedin ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Header;
