import React from "react";

export default function Display({display}:any){

    return (
      <div id="display" className="d-flex flex-row flex-wrap w-75 h-50 justify-content-end align-items-end fs-2 "
        style={{backgroundColor:'darkolivegreen', boxShadow: 'inset 0 0 10px #000000', padding: '0 10px 5px 0' }}
      >
        {display}
      </div>
    );
  }



