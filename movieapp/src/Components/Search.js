import { Input } from "antd";
import React from "react";
import Rate from "./Rate";
import { useDispatch, useSelector } from "react-redux";
import { handle_Input_Search } from "../js/actions";

const Search = () => {
  const rate = useSelector((state) => state.inputRate);
  const dispatch = useDispatch();
  return (
    <>
      <Input onChange={(e) => dispatch(handle_Input_Search(e.target.value))} />
      <Rate rate={rate} />
    </>
  );
};

export default Search;
