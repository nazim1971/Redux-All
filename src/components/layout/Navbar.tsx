import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";


const Navbar = () => {
    return (
        <nav className="h-16 bg-slate-300 flex justify-between items-center">
            <div className="text-2xl">
                Task <span className="text-red-500">Master</span>
            </div>
            <div className="flex items-center gap-4">
                <div className=" flex gap-3">
                <Link className=" border-2 bg-red-300 p-3 rounded-lg " to='/'>Task</Link>
                <Link className=" border-2 bg-red-300 p-3 rounded-lg "  to='/users' >Users</Link>
                <Link className=" border-2 bg-red-300 p-3 rounded-lg "  to='/login' >Login</Link>
                </div>
                <div>
                    <ModeToggle/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
