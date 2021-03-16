import React, { useState } from "react";
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
    const addevent = ()=>{
        if(notes.title!="" || notes.content!=""){
            props.passnote(notes);
            setnotes({
            title:"",
            content:"",
            });
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
  