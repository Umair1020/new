import React from "react";
import "./pdf.css";
const Loader = ({ isLoading }) => {
  if (!isLoading) return null;
  return (
    <div className="container1">
      <div className="spinner1"></div>
    </div>
  );
};

export default Loader;
