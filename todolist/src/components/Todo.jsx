import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(todo.id)}
        className={`${todo.completed ? "completed" : ""}`}
      >
        {todo.task}
      </p>
      <div>
        <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(todo.id)}/>
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={(() => deleteTodo(todo.id))}/>
      </div>
    </div>
  );
};

export default Todo;
