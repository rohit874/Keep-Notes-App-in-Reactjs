
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
              <h3>{props.title}</h3>
              <p>{props.content}</p>
              <button onClick={deletenote} ><i class="fas fa-code"></i></button>
              <button onClick={editbtn} >Edit</button>
          </div>
      </>
    );
  }
  
  export default Notes;
  