import React, { useState } from "react";

const Popup = (props) => {
    const [notes, setnotes]= useState({
        title:props.title,
        content:props.content,
        id:props.id
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
const update=()=>{
    props.updateitem(notes);
  };
  return (
    <div className="popup-box">
    <div className="box">
    <span className="close-icon" onClick={props.Closemodel}>x</span>
    <div className="tn_div">
    <input type="text" name="title" placeholder="Title" value={notes.title} onChange={inputevent}/>
    <textarea id="create" cols="30" rows="7" value={notes.content} onChange={inputevent} name="content" placeholder="Write something....."></textarea>
    <button onClick={update} >Save</button>
   </div>
   </div>
</div> 
  );
};
 
export default Popup;