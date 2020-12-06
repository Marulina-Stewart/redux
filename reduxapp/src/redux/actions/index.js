export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DONE_TODO = "SELECT_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function removeTodo(todoId) {
  return {
    type: REMOVE_TODO,
    payload: todoId,
  };
}

export function editTodo(newText, todoId) {
  return {
    type: EDIT_TODO,
    payload: todoId,
    text: newText,
  };
}

export function doneTodo(todoId) {
  return {
    type: DONE_TODO,
    payload: todoId,
  };
}
