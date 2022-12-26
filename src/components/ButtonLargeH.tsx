import React from "react";
import { updateDisplay } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

interface MessageProps {
  value: any;
  id: string;
  button: String
}

export default function ButtonLargeH({value, id, button}: MessageProps) {
    const dispatch = useDispatch()
 
    return (
      <button
        id={id}
        className="d-flex border border-dark border-2 rounded bg-info fs-5 justify-content-center align-items-center"
        style={{width: 135, height: 50, boxShadow: '-3px 5px 10px 0px rgba(0,0,0, .35)'}}
        value={value}
        onClick={()=>dispatch(updateDisplay(value))}
      >
        {button}
      </button>
    );
  }
