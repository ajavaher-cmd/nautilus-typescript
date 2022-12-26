import React from "react";
import { addition } from "../actions/actions";
import { equal } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";

interface MessageProps {
  id: string;
  button: String
}

export default function ButtonLargeV({id, button}:MessageProps){
    const dispatch = useDispatch()
  
  function handleClick() {
    if (id === "add") {
        dispatch(addition());
    } else if (id === "equals") {
        dispatch(equal())
    }
  }

    return (
      <>
      <button id={id} 
       className="d-flex border border-dark border-2 rounded bg-info fs-5 justify-content-center align-items-center"
       style={{width: 50, height: 123, boxShadow: '-3px 5px 10px 0px rgba(0,0,0, .35)'}}
        onClick={()=>handleClick()
          
        }
      >
        {button}
      </button>
      </>
    )
  };
