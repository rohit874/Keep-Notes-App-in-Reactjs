import './App.css';
import Header from './header';
import TakeNotes from './takeNotes';
import Notes from './notes';
import Popup from './Popup';
import React, { useState, useEffect } from 'react';

function App() {

    //switch b/w light & Dark theme
    let theme_dark = "--theme: black; --text: white; --background:#383838; --boxShadow: #7a7a7ac9;";
    let theme_light = "--theme: white; --text: black; --background:#ececec; --boxShadow: #00000033;";
    const [themeDark, setThemeDark] = useState(false);
    const Changetheme = () => {
      if (!themeDark) {
        document.documentElement.style.cssText = theme_dark;
      }
      else{
        document.documentElement.style.cssText = theme_light;
      }
      setThemeDark(!themeDark);
    }
  
  const [items, setitems] = useState([]);
  //checking if localstorage already exist
  useEffect(()=>{
    if(localStorage.hasOwnProperty("notes_data")){
      console.log("local");
      var retrievedData = localStorage.getItem("notes_data");
      var notes_data = JSON.parse(retrievedData);
      console.log(notes_data);
      setitems(notes_data);
    }
    else{
      localStorage.setItem("notes_data", JSON.stringify(items));
    }
  },[]);

  //update localstorage when items updated
  useEffect(() => {
    localStorage.setItem("notes_data", JSON.stringify(items));
  }, [items]);


  const [updatenote, setupdatenote] = useState({title:"",content:"",id:""});
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = (id) => {
    console.log(id);
    updatenote.title=items[id].title;
    updatenote.content=items[id].content;
    updatenote.id=id;
    setIsOpen(!isOpen);
  }

  const closebtn =()=>{
    setIsOpen(!isOpen);
  }

  const addnote=(notes)=>{
    setitems((prevdata)=>{
      return [notes,...prevdata];
    });
  };

  const ondelete=(id)=>{
    setitems((olddata)=>
      olddata.filter((currdata,indx)=>{
        return indx !== id;
      })
    );
  };

  const onupdate=(note)=>{
    let temporaryarray = items.slice();
        temporaryarray[note.id]["title"] = note.title;
        temporaryarray[note.id]["content"] = note.content;
        setitems(temporaryarray);
        closebtn();
  };


  return (
    <div>
      <Header Changetheme={Changetheme} />
      <TakeNotes passnote={addnote} />
      <div className="notes_parent">
        {
        items.map((val,index)=>{
          return (<Notes 
          key={index}
          id={index}
          data={val}
          deleteitem={ondelete}
          updateitem={onupdate}
          handleClose={togglePopup}
          />);
        })}
      </div>
      
    {isOpen && <Popup
      handleClose={togglePopup}
      Closemodel={closebtn}
      updateitem={onupdate}
      title={updatenote.title}
      content={updatenote.content}
      id={updatenote.id}
    />}
    </div>
  );
}

export default App;
