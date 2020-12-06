import { createStore } from "redux";
import { todoReducer } from "./reducer";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export let store = createStore(todoReducer, devtools);
