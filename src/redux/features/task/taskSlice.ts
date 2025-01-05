import { ITask } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitState{
    task: ITask[]
}

const initialState : IinitState = {
    task: [
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
]
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {}
})

export default taskSlice.reducer