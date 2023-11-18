import React, { usestate } from "react";
import TodoForm from "./TodoForm";
import { RiClosecircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/tii";

function Todo() {
  const [edit, setEdit] = usestate({
    id: null,
    value: "",
  });
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiClosecircleLine />
        <TiEdit />
      </div>
    </div>
  ));
}

export default Todo;
