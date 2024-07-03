import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex items-center justify-between px-4 py-8 mx-auto md:max-w-7xl">
      <p className="text-2xl font-bold md:text-4xl text-primary">D-Blog</p>
      <div className="items-center hidden space-x-2 md:flex">
        {token ? (
          <>
            <span>
              <IoNotificationsOutline className="text-2xl" />
            </span>
            <div className="relative">
              <span>
                <FaRegCircleUser
                  onClick={handleOpenMenu}
                  className="text-4xl cursor-pointer hover:text-primary"
                />
              </span>
              {isOpen && (
                <div className="absolute right-0 z-50 flex flex-col items-start gap-1 py-2 mt-2 bg-white rounded-md shadow-lg w-36 drop-shadow-lg">
                  <Link to="/home" className="block px-4 text-gray-800">
                    Post
                  </Link>
                  <Link
                    to="/posts/preview"
                    className="block px-4 text-gray-800"
                  >
                    Draft
                  </Link>
                  <Link
                    to="/posts/publish"
                    className="block px-4 text-gray-800"
                  >
                    Publish
                  </Link>
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
      <CiMenuBurger className="flex text-2xl cursor-pointer md:hidden" />
    </nav>
  );
};

export default Navbar;
