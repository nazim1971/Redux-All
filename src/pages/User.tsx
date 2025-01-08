
import TodoTask from "@/module/todoTask/TodoTask";
import { AddUserModel } from "@/module/user/AddUserModel";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";



const User = () => {

    const users = useAppSelector(selectUser)

    console.log(users);


  return (
    <div>
        <div className="py-5 text-3xl font-semibold text-violet-200">All Task</div>
        <div className="flex justify-between">
        <AddUserModel/>
        </div>
       <div className="space-y-5 mt-5">
       {
        users.map(user=>(
            <TodoTask key={user.id} user={user} />
        ))
       }
       </div>
    </div>
  )
}

export default User