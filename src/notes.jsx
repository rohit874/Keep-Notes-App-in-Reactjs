
function Notes(props) {
  const deletenote=()=>{
    props.deleteitem(props.id);
  };
  const editbtn = ()=>{
     props.handleClose(props.id);  
  }
    return (
      <>
          <div className="notes_div">
              <h3>{props.data.title}</h3>
              <p>{props.data.content}</p>
              <div className="date_button">
                <span>{props.data.date}</span>
                <button className="editbtn" onClick={editbtn} >Edit</button>
                <button className="dlbtn" onClick={deletenote} >Del</button>
              </div>
          </div>
      </>
    );
  }
  
  export default Notes;
  