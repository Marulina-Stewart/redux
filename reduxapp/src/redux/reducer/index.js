import { ADD_TODO, REMOVE_TODO, EDIT_TODO, DONE_TODO } from "../actions/index";
import { state0 } from "../actionTypes/actionTypes";

export let todoReducer = (state = state0, action) => {
  switch (action.type) {
    case ADD_TODO:
      if (action.payload.description.trim() !== "") {
        return { ...state, todos: [...state.todos, action.payload] };
      }
      return state;
    case REMOVE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, description: action.text }
              : todo
          ),
        ],
      };
    case DONE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map((todo) =>
            todo.id === action.payload
              ? { ...todo, isDone: !todo.isDone }
              : todo
          ),
        ],
      };
    default:
      return state;
  }
};
