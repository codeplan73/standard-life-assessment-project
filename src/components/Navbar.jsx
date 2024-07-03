import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa"; // Corrected import from 'react-icons/fa6' to 'react-icons/fa'

import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const authLink = [
    { label: "Post", href: "/home" },
    { label: "Draft", href: "/posts/preview" },
    { label: "Publish", href: "/posts/publish" },
  ];
  const publicLink = [
    { label: "Login", href: "/login" },
    { label: "Register", href: "/register" },
  ];

  return (
    <nav className="container relative flex items-center justify-between px-4 py-8 mx-auto md:max-w-7xl">
      <Link to="/" className="text-2xl font-bold md:text-4xl text-primary">
        D-Blog
      </Link>
      <div className="items-center hidden space-x-2 md:flex">
        {token ? (
          <>
            <span>
              <IoNotificationsOutline className="text-2xl" />
            </span>
            <div className="relative">
              <span>
                <FaRegUser
                  onClick={handleOpenMenu}
                  className="text-4xl cursor-pointer hover:text-primary"
                />
              </span>
              {isOpen && (
                <div className="absolute right-0 z-50 flex flex-col items-start gap-1 py-2 mt-2 bg-white rounded-md shadow-lg w-36 drop-shadow-lg">
                  {authLink.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="block px-4 text-gray-800"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <button
                    onClick={() => {
                      dispatch(logout());
                    }}
                    className="block px-4 text-gray-800"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <CiMenuBurger
        onClick={toggleMenu}
        className="flex text-2xl cursor-pointer md:hidden"
      />

      {openMenu && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-70"
          onClick={() => setOpenMenu(false)}
        ></div>
      )}

      <ul
        className={`w-8/12 absolute z-20 bg-white h-screen backdrop:bg-slate-400 left-0 top-0 transform ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {(token ? authLink : publicLink).map((link) => (
          <li key={link.href}>
            <Link
              to={link.href}
              className="flex w-full p-4 text-slate-700 hover:bg-secondaryColor hover:text-white"
              onClick={() => setOpenMenu(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
