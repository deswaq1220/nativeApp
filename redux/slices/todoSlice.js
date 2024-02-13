import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "todo",
      });
    },
    updateTodo: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.todos.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        state.todos[itemIndex].state = state.todos[itemIndex].state === 'todo' ? 'done' : 'todo';
      }
    },
    deleteTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
