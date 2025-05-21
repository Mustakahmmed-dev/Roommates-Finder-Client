import { Link, NavLink } from "react-router";
import logo from '/FindMate.png';
import { use } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/add-to-find-roommate">Add to Find Roommate</NavLink></li>
        <li><NavLink to="/browse-listings">Browse Listings</NavLink></li>
        <li><NavLink to="/my-listings">My Listings</NavLink></li>
    </>

    const { user, logOutUser } = use(AuthContext);
    // console.log(user.photoURL)

    const handleLogOut = () => {
        logOutUser();
        toast.success("Log out successful!")
    }

    return (
        <div className="navbar px-5 md:px-10 py-3 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div>
                    <Link to="/" className="flex gap-2 items-center">
                        <img className="md:w-[80px] h-[80px] rounded" src={logo} alt="FindMate Logo" />
                        <h2 className="text-xl font-bold text-cyan-500">FindMates</h2>
                    </Link>
                </div>
                
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3">
                {user ? <>
                <img className="w-14 rounded-full" src={user?.photoURL} alt="Profile photo" title={user?.displayName} />
                <button onClick={handleLogOut} className="btn btn-neutral"><Link>Log Out</Link></button> 
                </>
                    :
                    <>
                        <button className="btn btn-neutral"><Link to="/login">Login</Link></button>
                        <button className="btn btn-neutral"><Link to="/register">Sign Up</Link></button>
                    </>}

            </div>
        </div>
    )
}

export default Navbar;