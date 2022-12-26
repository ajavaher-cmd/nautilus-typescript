import React from "react";
import ButtonSmall from "./ButtonSmall";
import ButtonLargeV from "./ButtonLargeV";
import ButtonLargeH from "./ButtonLargeH";

export default function Keypad({display}:any){

    return (
      <div className="d-flex flex-column flex-wrap w-75 h-75"
        style={{
          boxShadow: '-3px 5px 10px 0px rgba(0,0,0, .25)',
          backgroundColor: 'pink'
        }}
      >
        <div className="d-flex flex-row flex-wrap w-75 h-75">
          <div className="d-flex flex-row w-100 h-25 justify-content-around align-items-center">
            <ButtonSmall button={"C"} id={"clear"} value={display}/>
            <ButtonSmall button={"/"} id={"divide"}  value={display} />
            <ButtonSmall button={"*"} id={"multiply"}  value={display} />
          </div>
          <div className="d-flex flex-row w-100 h-25 justify-content-around align-items-center">
            <ButtonSmall button={"7"} id={"seven"} value={'7'}  />
            <ButtonSmall button={"8"} id={"eight"} value={'8'} />
            <ButtonSmall button={"9"} id={"nine"} value={'9'}  />
          </div>
          <div className="d-flex flex-row w-100 h-25 justify-content-around align-items-center">
            <ButtonSmall button={"4"} id={"four"} value={'4'} />
            <ButtonSmall button={"5"} id={"five"} value={'5'}  />
            <ButtonSmall button={"6"} id={"six"} value={'6'}  />
          </div>
          <div className="d-flex flex-row w-100 h-25 justify-content-around align-items-center">
            <ButtonSmall button={"1"} id={"one"} value={'1'}  />
            <ButtonSmall button={"2"} id={"two"} value={'2'} />
            <ButtonSmall button={"3"} id={"three"} value={'3'}  />
          </div>
        </div>
        <div className="d-flex flex-row w-75 h-25 justify-content-around align-items-center"
          
        >
          <ButtonLargeH button={"0"} id={"zero"} value={'0'}  />
          <ButtonSmall button={"."} id={"decimal"} value={'.'} />
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center"
          style={{width: '25%', height: '97%'}}
        >
          <ButtonSmall button={"-"} id={"subtract"} value={display} />
          <ButtonLargeV button={"+"} id={"add"}   />
          <ButtonLargeV button={"="} id={"equals"}   />
        </div>
      </div>
    );
  }





