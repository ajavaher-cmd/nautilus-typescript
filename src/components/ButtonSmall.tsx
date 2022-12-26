import React from "react";
import { updateDisplay } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

interface MessageProps {
  id: string;
  value: any;
  button: String
}

export default function ButtonSmall({id, value, button}: MessageProps){
    const dispatch = useDispatch()
   
  function handleClicks() {
    if (id === "clear") {
      dispatch(clearDisplay())
    } else if (id === "subtract") {
      dispatch(subtraction())
    } else if (id === "multiply") {
      dispatch(multiplication())
    } else if (id === "divide") {
      dispatch(division())
    } else {
     dispatch(updateDisplay(button));
    }
  }

 
    return (
      <button
        id={id}
        value={value}
        className="d-flex border border-dark border-2 rounded bg-info fs-5 justify-content-center align-items-center"
        style={{width: 50, height: 50, boxShadow: '-3px 5px 10px 0px rgba(0,0,0, .35)'}}
        onClick={()=>handleClicks()}
      >
        {button}
      </button>
    );
  }



