import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="h-16 bg-slate-300 flex justify-between items-center">
            <div className="text-2xl">
                Task <span className="text-red-500">Master</span>
            </div>
            <div >
                <Link className=" border-2 bg-red-300 p-3 rounded-lg " to='/'>Task</Link>
                <Link className=" border-2 bg-red-300 p-3 rounded-lg "  to='/users' >Users</Link>
                <Link className=" border-2 bg-red-300 p-3 rounded-lg "  to='/login' >Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
