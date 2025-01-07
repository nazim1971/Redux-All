import { selectTask } from '@/redux/features/task/taskSlice';
import { RoootState } from '@/redux/store';
import { IUser } from "@/types/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitUser {
  users: IUser[];
}

const initialState: InitUser = {
  users: [
    {
      id: "A-01",
      name: "Nazim uddin",
      isDeleted: false
    },
    {
      id: "A-02",
      name: "Asik hossen",
      isDeleted: false
    },
    {
      id: "A-03",
      name: "Mohon lal",
      isDeleted: false
    },
  ],
};

type DraftUser = Pick<IUser, "name">;

const createUser = (userData: DraftUser): IUser => {
  return {
    id: nanoid(),
    isDeleted: false,
    ...userData,
  };
};

const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<DraftUser>) => {
      const userData = createUser(action.payload);
      state.users.push(userData);
    },
    deleteUser: (state, action: PayloadAction<string>) =>{
        console.log(action);
        state.users= state.users.filter((user)=> user.id !== action.payload)
    }
  },
});

export const selectUser = (state: RoootState) =>{
    const filter = state.todo.filter

    return state.todo.tasks
}

export const {addUser, deleteUser} = userSlice.actions

export default userSlice.reducer