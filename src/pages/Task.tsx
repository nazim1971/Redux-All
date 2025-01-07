import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddTaskModel } from "@/module/todoTask/AddTaskModel";
import TodoTask from "@/module/todoTask/TodoTask";
import { selectTask, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";



const Task = () => {

    const tasks = useAppSelector(selectTask)

    console.log(tasks);
    const dispatch = useAppDispatch(updateFilter("All"))



  return (
    <div>
        <div className="py-5 text-3xl font-semibold text-violet-200">All Task</div>
        <div className="flex justify-between">
        <Tabs defaultValue="All" className="w-[400px]">
  <TabsList>
    <TabsTrigger 
    onClick={()=> dispatch(updateFilter('All'))}  value="All">all</TabsTrigger>
    <TabsTrigger
    onClick={()=> dispatch(updateFilter('High'))}
     value="High">High</TabsTrigger>
    <TabsTrigger
    onClick={()=> dispatch(updateFilter('Medium'))}
    value="Medium">Medium</TabsTrigger>
    <TabsTrigger
    onClick={()=> dispatch(updateFilter('Low'))}
    value="Low">Low</TabsTrigger>
  </TabsList>
</Tabs>
        <AddTaskModel/>
        </div>
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