import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/auth/authSlice";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav className="container flex items-center justify-between px-4 py-8 mx-auto md:max-w-7xl">
      <p className="text-2xl font-bold md:text-4xl text-primary">D-Blog</p>
      <div className="items-center hidden space-x-2 md:flex">
        {token ? (
          <>
            <span>
              <IoNotificationsOutline className="text-2xl" />
            </span>
            <span>
              <FaRegCircleUser className="text-4xl" />
            </span>
            <button
              onClick={() => dispatch(logout())}
              className="text-lg font-semibold text-primary"
            >
              Logout
            </button>
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
