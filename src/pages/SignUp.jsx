import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../redux/slices/userSlice";

const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const [formData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formData);

  const handleSignup = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://ebook-jvez.onrender.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    console.log(data);
    if (!res.ok) {
      setMessage(data.message);
      return;
    }
    localStorage.setItem("user", data._id);
    localStorage.setItem("accessToken", data.accessToken);
    dispatch(signup(data._id));
    navigate("/");
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-5">
      <h2 className="text-2xl font-bold text-primary-700 mb-4">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFromData({ ...formData, name: e.target.value })}
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFromData({ ...formData, email: e.target.value })
            }
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
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFromData({ ...formData, password: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
          onClick={handleSignup}
          className="w-full bg-primary-500 text-white rounded-md py-2 px-4 font-medium hover:bg-primary-600 transition-colors"
        >
          Sign Up
        </button>
      </form>
      {message && <p>{message}</p>}
      <p className="mt-4 text-sm text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-500 font-medium">
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignupPage;
