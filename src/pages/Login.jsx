import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../redux/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://ebook-jvez.onrender.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    localStorage.setItem("user", data._id);
    localStorage.setItem("accessToken", data.accessToken);
    dispatch(login(data._id));

    navigate("/");
  };
  return (
    <div className="max-w-sm mx-auto mt-20 px-5">
      <h2 className="text-2xl font-bold text-primary-700 mb-4">Login</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            name="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleLogin}
          className="w-full bg-primary-500 text-white rounded-md py-2 px-4 font-medium hover:bg-primary-600 transition-colors"
        >
          Login
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        Dont have an account?{" "}
        <Link to="/signup" className="text-primary-500 font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
