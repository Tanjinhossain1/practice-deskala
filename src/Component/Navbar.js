import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from './firebase.init';


const Navbar = () => {
    const logout = () => {
        signOut(auth);
    };
    const [user] = useAuthState(auth)
    const navItems = <>
        <li><Link to='/home'>Home</Link> </li>
        <li><Link to='/landingPage'>LANDING PAGE</Link> </li>
        {user?.email ? <li onClick={() => logout()}><p >Logout</p></li> :
            <li><Link to='/Login'>Login</Link></li>}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">DeshKala</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;