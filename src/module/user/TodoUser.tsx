import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/redux/hook"
import {  IUser } from "@/types/types"
import {   Trash2 } from "lucide-react"
import { deleteUser } from "@/redux/features/user/userSlice"
import { AddUserModel } from "./AddUserModel"

interface IProps {
    user: IUser
}

const TodoUser = ({user}: IProps) => {

  const dispatch = useAppDispatch()

  return (
    <div className="border px-5 py-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
        </div>
        <div className="flex gap-3 items-center">

        <Button onClick={()=> dispatch(deleteUser(user.id))} variant={"link"} className="p-0 text-red-500" >
          <Trash2 />
        </Button>
        <AddUserModel user={user} />
        </div>
      </div>
      <p className="mt-5"> {user.name} </p>
      <p className="mt-5"> {user.id} </p>
    </div>
  )
}

export default TodoUser