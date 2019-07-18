import React from "react";

const renderApiErrors = error => {
  return (
    error && (
      <div className="ui error message">{error.userName || error.general}</div>
    )
  );
};

export default renderApiErrors;
