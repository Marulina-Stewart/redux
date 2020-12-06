import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { addTodo } from "../../redux/actions/index";
import "./AddTask.css";

const AddTask = () => {
  const todos = useSelector((state) => state.todos);
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: todos.length + 1,
        description: newTask,
        isDone: false,
      })
    );
    setNewTask("");
  };
  return (
    <div className="addtask">
      <div className="newtask"> New Task </div>
      <form className="row mx-3" onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Add Task here "
          className="col form-control m-4"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-dark m-4 "> Add Task </button>
      </form>
    </div>
  );
};

export default AddTask;
