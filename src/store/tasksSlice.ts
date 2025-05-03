import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface Task {
    id : string,
    title : string,
    completed : boolean,
};

interface TasksState {
    list: Task[]
};

const initialState: TasksState = {
    list: [],
};
  
const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: ( state, action: PayloadAction<string>) =>{
            const newTask: Task ={
                id: uuidv4(),
                title: action.payload,
                completed: false,
            };
            state.list.push(newTask);
        },

        toggleTask: (state, action: PayloadAction<string>) =>{
            const task = state.list.find((t)=> t.id === action.payload);
            if(task) task.completed = !task.completed;
        },
        deleteTask: ( state, action: PayloadAction<string>) =>{
            state.list = state.list.filter((t)=> t.id !== action.payload) 
        },
    }
})

export const { addTask, toggleTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;

