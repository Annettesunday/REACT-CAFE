import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        React Cafe
      </Link>
      <div className="right menu">
        <Link to="/" className="ui left floated header">
          My Cafe
        </Link>
      </div>
    </div>
  );
};

export default Header;
