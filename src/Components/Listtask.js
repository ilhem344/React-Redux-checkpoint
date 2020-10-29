import React from "react";
import { useSelector } from "react-redux";
import Task from "../Components/Task";
function Listtask() {
  const todos = useSelector((state) => state);
  return (
    <div>
      {todos.map((el) => {
        return (<Task key={el.id} todos={el} />)
      })}
    </div>
  );
}

export default Listtask;
