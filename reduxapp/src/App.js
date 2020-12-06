import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListTask from "./Comps/ListTask/ListTask";
import AddTask from "./Comps/AddTask/AddTask";

function App() {
  return (
    <div className="App">
      <h1 className="title"> ToDoList </h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
