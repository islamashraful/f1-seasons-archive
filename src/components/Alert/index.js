import React from "react";

const Alert = ({ message }) => (
  <div className="alert alert-danger" role="alert">
    {message || "An unexpected error occurred. Please try again later."}
  </div>
);

export default Alert;
