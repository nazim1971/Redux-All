import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RoootState } from "./redux/store";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {

  const dispatch = useAppDispatch();
  const  {count} = useAppSelector((state:RoootState)=>
    state.counter
  )

  const handleIncrement = () => {
    dispatch(increment(5))
  }

  const handledecrement = () => {
    dispatch(decrement(1))
  }

  return (
   <div>
    <h1>Counter with Redux</h1>
    <button onClick={handleIncrement} >Increment</button>
    <div>
      {count}
    </div>
    <button onClick={handledecrement} >Decrement</button>
   </div>
  )
}

export default App
