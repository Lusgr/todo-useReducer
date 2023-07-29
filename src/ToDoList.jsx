import React from "react";
import ToDoItem from "./ToDoItem";


const ToDoList = ({ todo, onChange, onDelete }) => {
  return (
    <div>
      {todo.map((toDo) => (
        <ToDoItem
          key={toDo.id}
          toDo={toDo}
          onChange={onChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ToDoList;