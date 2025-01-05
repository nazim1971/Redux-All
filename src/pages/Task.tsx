import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";



const Task = () => {

    const tasks = useAppSelector(selectTask)

    console.log(tasks);



  return (
    <div>task</div>
  )
}

export default Task