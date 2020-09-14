import React from "react";

import "./style.css";

export const SearchBox = (props) => (
  <input
    className="search-box"
    type="search"
    placeholder="Хайх ...."
    onChange={props.onSearch}
  />
);
