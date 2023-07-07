import { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
// import React, { useState } from 'react';
import {useHistory} from "react-router-dom";

function Topic(){

  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState("");
  var history = useHistory();

  useEffect(()=>{
    select();
  },[]);

  var select =()=>{
    var helper=new XMLHttpRequest;
    helper.onreadystatechange=()=>{
        if(helper.readyState==4 && helper.status==200){
             var result=JSON.parse(helper.responseText);
             setTopics(result);
        }
    }
    helper.open("GET","http://127.0.0.1:9999/user");
    helper.send();
  }

  var SelectTopic = () =>{

  }


  return(<>
      <div className="container">
        {topics.map((topic)=>{
          return (<>
              <div class="control-group">
              <div class="control__indicator"></div>
              <input type="radio" name="radio" id={`Topic${topic.topic_id}`}/>
              <label class="control control--radio">{topic.topic_name}  
              </label>
              </div>
               </>
            )}       
            )}
        <div>
        <input type="checkbox" className="btn-check" id="btn-check" autocomplete="off"/>
        <label className="btn btn-primary" htmlFor="btn-check" onClick={SelectTopic}>Choose Topic</label>  
        </div>
        <style jsx>{`
        .container {
          margin-top: 300px;
          margin-left: 700px;
        }
      `}</style>
      </div>
    </>);   
}

export default Topic;
