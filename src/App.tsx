import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { RoootState } from "./redux/store";

function App() {

  const dispatch = useDispatch();
  const  {count} = useSelector((state:RoootState)=>
    state.counter
  )

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handledecrement = () => {
    dispatch(decrement())
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
