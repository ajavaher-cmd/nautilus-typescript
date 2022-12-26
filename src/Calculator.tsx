import React from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { useDispatch, useSelector } from "react-redux";

export default function Calculator() {
    const displayValue = useSelector((state: any) => state.display)

    return (
      <div className="border border-2 " style={{width: 400, height: 600, boxShadow: '-5px 8px 10px 5px darkmagenta',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
        <div className="d-flex flex-row w-100 justify-content-center align-items-center" style={{height: 150, backgroundColor: 'hotpink',borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          <Display
            display={displayValue}
          />
        </div>
        <div className="d-flex flex-row w-100 justify-content-center align-items-center" style={{height: 450, backgroundColor: 'antiquewhite',}}>
          <Keypad
            display={displayValue}
          />
        </div>
      </div>
    );
  }
