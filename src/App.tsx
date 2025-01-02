import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RoootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

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
    <button onClick={()=>handleIncrement (2) } >Increment by 2</button>
    <button onClick={()=>handleIncrement (5) } >Increment by 5</button>
    <div>
      {count}
    </div>
    <button onClick={()=> handledecrement(5)} >Decrement</button>
   </div>
  )
}

export default App
