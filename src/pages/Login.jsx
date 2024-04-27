import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="max-w-sm mx-auto mt-20">
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
            name="password"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary-500"
          />
        </div>
        <button
          type="submit"
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
