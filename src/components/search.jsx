import React, { useState } from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Search = () => {
  const [visible, setVisible] = useState(false);
  return (
    <span className="search-box">
      <SearchOutlined onClick={() => setVisible(!visible)} />
      <Input
        className="input"
        style={{ width: visible ? "210px" : "0" }}
        size="small"
        placeholder="Basic usage"
      />
    </span>
  );
};

export default Search;
