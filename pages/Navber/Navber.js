import React from 'react';

const Navber = () => {
    const menuItem = <>
    <li><a>Home</a></li>
    <li><a>News</a></li>
    <li><a>About Us</a></li>
    <li><a>Blog</a></li>
    <li><a>Contact Us</a></li>
    </>
    return (
        <div className="navbar bg-black text-white p-3">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black text-white rounded-box w-52">
                 {menuItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Dummy News</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuItem}
          </ul>
        </div>
       
      </div>
    );
};

export default Navber;