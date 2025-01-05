import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: {
        id: 'S-10',
        title: 'Initialize frontend',
        description: 'Create Gome page, and route',
        dueData: '2025-11',
        isCompleted: false
    }
}

const taskSlice = createSlice({
    name: "Task",
    initialState,
    reducers: {}
})