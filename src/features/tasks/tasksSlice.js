import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false,
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false,
    },
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      return [...state, action.payload]
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload)
    },
    updateTask: (state, action) => void(state.map(task => {
        const { id, title, description } = action.payload
        if (task.id === id) {
          task.title = title;
          task.description = description;
        }
        return task
    }))
  }
})

export const { addTask, deleteTask, updateTask } = tasksSlice.actions
export default tasksSlice.reducer