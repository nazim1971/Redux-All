import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { deleteTask, toogleCompleteState } from "@/redux/features/task/taskSlice"

import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { ITask } from "@/types/types"
import {   Trash2 } from "lucide-react"
import { AddTaskModel } from "./AddTaskModel"
import { selectUser } from "@/redux/features/user/userSlice"

interface IProps {
    task: ITask
}

const TodoTask = ({task}: IProps) => {
  const users = useAppSelector(selectUser);
  const dispatch = useAppDispatch()

  const assignedUser = users.find(user=> user.id === task.assignTo);

  return (
    <div className="border px-5 py-5 rounded-md">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className={cn("size-3 rounded-full ", {
            "bg-green-500": task.priority === "High",
            "bg-yellow-500": task.priority === "Medium",
            "bg-red-500": task.priority === "Low"
          })}></div>
          <h1 className={cn({'line-through' : task.isCompleted})} > {task.title} </h1>
        </div>
        <div className="flex gap-3 items-center">

        <Button onClick={()=> dispatch(deleteTask(task.id))} variant={"link"} className="p-0 text-red-500" >
          <Trash2 />
        </Button>
        <AddTaskModel task={task} />
        <Checkbox checked={task.isCompleted} onClick={()=> dispatch(toogleCompleteState(task.id))} />
        </div>
      </div>
      
      <p className="mt-5"> {task.description} </p>
      <p className="mt-5"> {task.priority} </p>
      <p>{assignedUser? assignedUser.name : "No one"} </p>
    </div>
  )
}

export default TodoTask