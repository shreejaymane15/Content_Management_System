import { useEffect, useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css';
import {React} from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Tutorials(){
const[topics,settopics]=useState([]);
const [topic,settopic]=useState({topic_id:0,topic_name:"",topic_desc:""});

useEffect(()=>{
    select();
},[]);

const select=()=>{
    var helper=new XMLHttpRequest;
    helper.onreadystatechange=()=>{
        if(helper.readyState==4 && helper.status==200){
             var result=JSON.parse(helper.responseText);
             var receivedtopics=result;
             settopics(receivedtopics);
        }
    }
    helper.open("GET","http://127.0.0.1:9999/topics");
    helper.send();

}

const topicdelete=(No)=>{
    var helper = new XMLHttpRequest();
    helper.onreadystatechange = ()=>{
        if(helper.readyState == 4 &&
            helper.status == 200)
            {
                var responseReceived = 
                    JSON.parse(helper.responseText);
                if(responseReceived.affectedRows!=undefined && responseReceived.affectedRows>0)
                {
                   select();
                }
                
            }
    };
    helper.open("DELETE", 
                    "http://127.0.0.1:9999/topics/"+No);
    helper.send();
}
    

return(
    <div className='container' style={{backgroundColor:"lightblue"}}>
        <div className='table-responsive'>
              <table>
                <tbody>
                {
                    topics.map((topic)=>{
                        return (<tr>
                        <td>
                            {topic.topic_name}
                        </td>
                        <td>
                        <button className='btn btn-warning'
                        >
                        Update
                        </button>
                        </td>
                        <td>
                        <button className='btn btn-danger'
                       onClick={()=>{
                             topicdelete(topic.topic_id);
                       }}
                       >
                        Delete
                        </button>
                        </td>
               </tr>)
                    })
                }
                <button className='btn btn-primary'>Add New Tutorial</button>
                <button className='btn btn-danger'>Logout</button>
                </tbody>
              </table>
        </div>

    </div>
)

}
export default Tutorials;