import { RoootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

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
        priority: "Medium"
    },
    {
        id: 'S-12',
        title: 'Cpp Crack Tips',
        description: 'Create Home page, and route',
        dueDate: '2025-11',
        isCompleted: false,
        priority: "Low"
    }
],
filter: 'all'
}

type DraftTask = Pick<ITask, "title" | "description" |  "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask =>{
    return {
        id: nanoid(), isCompleted: false, ...taskData
    }
}

const taskSlice = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
        addTask:(state,action: PayloadAction<DraftTask> ) =>{
           
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        }
    }
})

export const selectTask = (state: RoootState)=>{
    return state.todo.tasks
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer