import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const navLinks = (
    <>
      <li className="text-base font-medium">
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base font-medium">
        {" "}
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li className="text-base font-medium">
        {" "}
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-red-600 text-white" : ""
          }
        >
          My Cart
         <FaShoppingCart></FaShoppingCart>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex flex-col-reverse items-center gap-2 normal-case text-red-600 font-bold text-xl">BiteOfTheBrands
          <div>
          <img className="h-16 w-16 rounded-full shadow-md shadow-slate-400" src="https://i.ibb.co/6gZnXyx/riku-lu-Bna-VH8mclsc-unsplash.jpg" alt="" /></div></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to="/login">
            <button className="btn bg-red-600 text-white ">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
