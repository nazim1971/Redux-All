import { RoootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitState{
    tasks: ITask[];
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialState : IinitState = {
    tasks: [
        {
        id: 'S-10',
        title: 'Initialize frontend',
        description: 'Create Gome page, and route',
        dueDate: '2025-11',
        isCompleted: false,
        priority: "High"
    },
    {
        id: 'S-11',
        title: 'Gmae changer',
        description: 'Create Gome page, and route',
        dueDate: '2025-11',
        isCompleted: false,
        priority: "High"
    }
],
filter: 'all'
}

const taskSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {}
})

export const selectTask = (state: RoootState)=>{
    return state.todo.tasks
}

export default taskSlice.reducer