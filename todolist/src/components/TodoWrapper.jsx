import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (value, id) => {
    console.log(id, value);
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, task: value, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} todo={todo} key={index} />
        ) : (
          <Todo
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            key={index}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
