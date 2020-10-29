import React from 'react';
import {useState} from 'react'
import {v1 as uuid} from 'uuid'
import { useDispatch , useSelector} from 'react-redux'
import { addToDo,FilterToDo,FilterDone } from '../redux/action';
function Addtask() {
 const [name,setname]=  useState('');
 const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();
    return (
        <div className='row' style={{marginBottom:'10px'}}>
            <input onChange={(e)=>{
                setname(e.target.value)
            }} value = {name} type='text' placeholder='enter the task'/>
            <button onClick =  { () => { if (name !==''){
                dispatch(addToDo({ id : uuid(), name : name }));
        {setname('')}; }}}> Add </button>
        <button onClick={()=>{dispatch(FilterToDo(todos))}}>filter to do tasks</button>
        <button onClick={()=>{dispatch(FilterDone(todos))}}>filter done tasks</button>
        </div>
    )
}

export default Addtask
