import './App.css';
import Header from './header';
import TakeNotes from './takeNotes';
import Notes from './notes';
import Popup from './Popup';
import React, { useState } from 'react';

function App() {
  const [items, setitems] = useState([
      {
          title: 'do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less workt this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'How did do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'Can i get yout email id you know',
          content:
              'did you want this is a paper less work what do you think abut it',
      },
      {
          title: ' So cool and Super do you know',
          content:
              'id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itdid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less workt this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'How did do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'Can i get yout email id you know',
          content:
              'did you want this is a paper less work what do you think abut it',
      },
      {
          title: ' So cool and Super do you know',
          content:
              'id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itdid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less workt this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'How did do you know',
          content:
              'did you want this is a paper less work what do you think abut it id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut it',
      },
      {
          title: 'Can i get yout email id you know',
          content:
              'did you want this is a paper less work what do you think abut it',
      },
      {
          title: ' So cool and Super do you know',
          content:
              'id you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itid you want this is a paper less work what do you think abut itdid you want this is a paper less work what do you think abut it',
      },
  ])
  const [updatenote, setupdatenote] = useState(
    {title:"Rohit",
    content:"KUMAR you want this is a paper less work what do you think abut it",
    id:""
  }
  );
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = (id) => {
    updatenote.title=items[id]["title"];
    updatenote.content=items[id]["content"];
    updatenote.id=id;
    setIsOpen(!isOpen);
  }
const closebtn =()=>{
  setIsOpen(!isOpen);
}
  const addnote=(notes)=>{
    setitems((prevdata)=>{
      return [...prevdata, notes];
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
      <Header />
      <TakeNotes passnote={addnote} />
      <div className="notes_parent">
        {
        items.map((val,index)=>{
          return (<Notes 
          key={index}
          id={index}
          title={val.title}
          content={val.content}
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
