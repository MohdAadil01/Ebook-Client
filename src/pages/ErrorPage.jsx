import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-md text-center">
        <h2 className="text-3xl font-bold text-primary-700 mb-4">
          Error {error.data}
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          Oops! Something went wrong.
        </p>
        <p className="text-gray-600 mb-6">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          to="/"
          className="text-primary-500 font-medium hover:text-primary-600"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
