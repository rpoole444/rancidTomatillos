import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404 Error</h1>
      <img src="robot.jpg" alt="robot" />
      <h2>Page Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default ErrorPage;