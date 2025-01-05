import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RoootState } from "@/redux/store";


const Tasks = () => {
      const dispatch = useAppDispatch();
      const  {count} = useAppSelector((state:RoootState)=>
        state.counter
      )
    
      const handleIncrement = (payload:number) => {
        dispatch(increment(payload))
      }
    
      const handledecrement = (payload: number) => {
        dispatch(decrement(payload))
      }
    return (
        <div>
          <h1>Counter with Redux</h1>
    <Button className="btn bg-slate-200 p-2 m-2 rounded-2xl" onClick={()=>handleIncrement (2) } >Increment by 2</Button>
    <Button className="btn bg-slate-200 p-2 m-2 rounded-2xl" onClick={()=>handleIncrement (5) } >Increment by 5</Button>
    <div>
      {count}
    </div>
    <Button className="btn bg-slate-200 p-2 m-2 rounded-2xl" onClick={()=> handledecrement(5)} >Decrement</Button>
        </div>
    );
};

export default Tasks;