import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import React, { useState } from 'react';


function Topic(){
  debugger;
  console.log("hello");
    return(<>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
          <label className="form-check-label" for="flexRadioDefault1"> Default radio </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
          <label className="form-check-label" for="flexRadioDefault2"> Default checked radio </label>
        </div>
    </>);
}

export default Topic;