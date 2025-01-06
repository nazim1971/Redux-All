import { AddTaskModel } from "@/module/todoTask/AddTaskModel";
import TodoTask from "@/module/todoTask/todoTask";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";



const Task = () => {

    const tasks = useAppSelector(selectTask)

    console.log(tasks);



  return (
    <div>
        <div className="py-5 text-3xl font-semibold text-violet-200">All Task</div>
        <AddTaskModel/>
       <div className="space-y-5 mt-5">
       {
        tasks.map(task=>(
            <TodoTask key={task.id} task={task} />
        ))
       }
       </div>
    </div>
  )
}

export default Task