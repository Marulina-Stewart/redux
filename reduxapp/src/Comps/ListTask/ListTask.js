import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import { useSelector } from "react-redux";
import "./ListTask.css";

const ListTask = () => {
  const todos = useSelector((state) => state.todos);
  const [filter, setFilter] = useState("ALL");
  const [selectList, setSelectList] = useState([]);
  useEffect(() => {
    const handleFilter = () => {
      switch (filter) {
        case "Done":
          setSelectList(todos.filter((el) => el.isDone === true));
          break;
        case "Not done":
          setSelectList(todos.filter((el) => el.isDone === false));
          break;
        default:
          setSelectList(todos);
      }
    };
    handleFilter();
  }, [todos, filter]);
  return (
    <div className="List">
      <div className="filterselecct row">
        <span className="FilterTasks"> Filter Tasks </span>
        <select
          className=" filter form-control"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All"> Tasks available </option>
          <option value="Done"> Done </option>
          <option value="NotDone"> NotDone </option>
        </select>
      </div>
      <div className="currenttasks">
        <div className="currenttext"> Current Tasks </div>
        {todos && todos.length ? (
          selectList.map((el) => <Task key={el.id} todo={el} />)
        ) : (
          <span className="Notasks"> No task left </span>
        )}
      </div>
    </div>
  );
};

export default ListTask;
