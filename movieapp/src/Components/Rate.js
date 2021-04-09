import React from "react";
import { handle_Input_Rate } from "../js/actions";
import { useDispatch } from "react-redux";
const Rate = ({ rate }) => {
  const dispatch = useDispatch();
  const star = [];
  for (let i = 0; i < 5; i++) {
    if (i < rate) {
      star.push(
        <span onClick={() => dispatch(handle_Input_Rate(i + 1))}>★</span>
      );
    } else {
      star.push(
        <span onClick={() => dispatch(handle_Input_Rate(i + 1))}>☆</span>
      );
    }
  }
  return star;
};

export default Rate;
