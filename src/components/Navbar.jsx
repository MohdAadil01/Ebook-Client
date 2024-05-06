import { Link } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../redux/slices/userSlice";
import { LuSearch } from "react-icons/lu";

function Navbar() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  };

  return (
    <div className="border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="logo flex items-center gap-3">
          <Link to={"/"} className="flex items-center justify-center gap-3">
            <FaBookOpen size={40} className="inline text-primary-400" />
            <span className="text-xl font-bold uppercase tracking-tight text-primary-700">
              NOTESHUB
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-primary-500"
            />
            <button className="absolute right-0 top-1 mt-2 mr-2">
              <LuSearch className="text-primary-700 font-bold" size={20} />
            </button>
          </div>
          {user && (
            <div>
              <Link
                to={"/books/create"}
                className="h-10 rounded-lg px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200"
              >
                Share Your Reads
              </Link>
            </div>
          )}
          {user ? (
            <button onClick={handleLogout}>
              <IoMdLogOut size={40} className="text-primary-700" />
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200">
                  Login
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
