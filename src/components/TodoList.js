import React, { useState } from "react";
import Todoform from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(todo, ...todos);
  };
  
  return (
    <div className="">
      <h1>what's the plan for Today?</h1>
      <Todoform onSubmit={addTodo} />
    </div>
  );
}

export default TodoList;
