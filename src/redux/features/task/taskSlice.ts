import { RoootState } from "@/redux/store";
import { ITask } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { act } from "react";

interface IinitState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IinitState = {
  tasks: [
    {
      id: "S-10",
      title: "Initialize frontend",
      description: "Create Gome page, and route",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "S-11",
      title: "Gmae changer",
      description: "Create Gome page, and route",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Medium",
    },
    {
      id: "S-12",
      title: "Cpp Crack Tips",
      description: "Create Home page, and route",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

type DraftTask = Pick<ITask, "title" | "description" | "dueDate" | "priority">;

const createTask = (taskData: DraftTask): ITask => {
  return {
    id: nanoid(),
    isCompleted: false,
    ...taskData,
  };
};

const taskSlice = createSlice({
  name: "Tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      const taskData = createTask(action.payload);
      state.tasks.push(taskData);
    },
    toogleCompleteState: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      console.log(action);
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<ITask>) => {
        console.log(action);
        state.tasks = state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload } 
            : task
        );
      }
  },
});

export const selectTask = (state: RoootState) => {
  return state.todo.tasks;
};

export const { addTask, toogleCompleteState, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
