import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
};

const addTodos = (state, action) => {
  const todo = {
    id: nanoid(),
    text: action.payload,
  };
  state.todos.push(todo);
};

const removeTodos = (state, action) => {
  state.todos = state.todos.filter((item) => item.id !== action.payload);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: addTodos,
    removeTodo: removeTodos,
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
