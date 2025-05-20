import { NavLink } from "react-router";
import logo from '/FindMate.png';

const Navbar = () => {
    const links = <>
        <li><NavLink>Home</NavLink></li>
        <li><NavLink>Add to Find Roommate</NavLink></li>
        <li><NavLink>Browse Listings</NavLink></li>
        <li><NavLink>My Listings</NavLink></li>
    </>

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
                        <a className="">
                            <img className="w-[80px] md:w-[100px]" src={logo} alt="FindMate Logo" />
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button>Login</button>
                </div>
            </div>
    )
}

export default Navbar;