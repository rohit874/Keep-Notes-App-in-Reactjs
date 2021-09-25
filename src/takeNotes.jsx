import React, { useState } from "react";
import moment from "moment";

function TakeNotes(props) {
    const [notes, setnotes]= useState({
        title:"",
        content:"",
    });
    const inputevent= (event)=>{    
    const {name, value} = event.target;
    setnotes((prevdata) =>{
        return{
            ...prevdata,
            [name]:value, 
        };
    });
};
    const getDate=()=>{
        return moment().format("DD MMM YYYY hh:mma");
    }

    const addevent = async ()=>{
        const newDate = getDate();
        if(notes.title!="" || notes.content!=""){
            props.passnote(notes);
            setTimeout(() => {
                setnotes({
                    title:"",
                    content:"",
                    date: newDate 
                    });
            }, 50);
            
         }
    }
    return (
      <>
      <div className="tn_div">
       <input type="text" name="title" placeholder="Title" value={notes.title} onChange={inputevent}/>
       <textarea id="create" cols="30" rows="7" value={notes.content} onChange={inputevent} name="content" placeholder="Write something....."></textarea>
       <button onClick={addevent} >save</button>
      </div>
      </>
    );
  }
  
  export default TakeNotes;
  