import { Link, useNavigate } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();
  const gotoLogin = () => {
    navigate("/login");
  };
  const gotoSignup = () => {
    navigate("/signup");
  };
  return (
    <div className=" border-b">
      <nav className=" max-w-7xl mx-auto flex items-center justify-between py-4">
        <div className="logo flex items-center gap-3">
          <Link to={"/"} className="flex items-center justify-center gap-3">
            <FaBookOpen size={40} className="inline text-primary-400" />
            <span className="text-xl font-bold uppercase tracking-tight text-primary-700">
              Books
            </span>
          </Link>
        </div>
        <div className="auth flex items-center gap-4">
          <button
            onClick={gotoLogin}
            className="h-10 rounded-md border border-primary-500 px-4 py-2 text-sm font-medium text-primary-500 transition-all hover:border-primary-100 hover:bg-primary-100 active:border-primary-200 active:bg-primary-200"
          >
            Login
          </button>
          <button
            onClick={gotoSignup}
            className="h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:bg-primary-700"
          >
            Register
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
