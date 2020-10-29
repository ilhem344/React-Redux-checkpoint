import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import { DeleteToDo, UpdateToDo ,changetodone } from "../redux/action";


function Task({ todos }) {
  let dispatch = useDispatch();
  const [editable, seteditable] = useState(false);
  const [name, setname] = useState(todos.name);
  // const [complete,setcomplete]=useState(todos.complete)
  const handlechange=(e)=>{setname(e.target.value);}
  return (
    <div>
      {editable ?   <input  type ='text'  value={name}  onChange={(e)=>{handlechange(e)}}  />  :   <p style={{display:"inline-block" ,width:'150px', marginRight :'50px'}}>{todos.name}</p>  }
      <div style={{display:"inline-block"}}>
       <Button size="sm" variant="dark"  onClick={() => {    dispatch(UpdateToDo({ ...todos, name: name}) ) 
           if (editable) {
              setname(todos.name);
        }        seteditable(!editable);
     }
        }
      >
        {editable ? "update" : "Edit"}
      </Button>
      <Button size="sm" variant="danger" onClick={() => dispatch(DeleteToDo(todos.id))}>Delete</Button>
      <Button size="sm" variant="success" onClick= {()=>{
        //  setcomplete(!complete)
         dispatch(changetodone(todos.id))
     }}> Done </Button>
    </div>
    </div>
  );
}

export default Task;
