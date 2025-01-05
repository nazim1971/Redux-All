import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {



  return ( 
   <div className="px-10 mt-10">
    <Navbar/>
    
    <Outlet/>
   </div>
  )
}

export default App
