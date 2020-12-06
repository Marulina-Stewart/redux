import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo, doneTodo } from "../../redux/actions/index";
import "./Task.css";

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState(todo.description);
  const [editable, setEditable] = useState(false);
  return (
    <div>
      <hr />
      <div className="row mx-5 align-items-center">
        <span> {todo.id}</span>
        {editable ? (
          <input
            type="text"
            className="col form-control m-4"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
        ) : (
          <h5 className={todo.isDone ? "col Done" : "col"}>
            {todo.description}{" "}
          </h5>
        )}

        <button
          className="btn btn-secondary m-2"
          onClick={() => {
            dispatch(editTodo(todoText, todo.id));
            setEditable(!editable);
          }}
        >
          {" "}
          {editable ? "Update" : "Edit"}{" "}
        </button>

        <button
          className={
            todo.isDone ? "btn btn-success m-2" : "btn btn-primary m-2"
          }
          onClick={() => dispatch(doneTodo(todo.id))}
        >
          {" "}
          {todo.isDone ? "Undo" : "Todo"}{" "}
        </button>

        <button
          className="btn btn-danger m-2"
          onClick={() => dispatch(removeTodo(todo.id))}
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    </div>
  );
};

export default Task;
