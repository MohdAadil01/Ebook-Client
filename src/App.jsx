import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import SingleBook from "./pages/SingleBook";
import Books from "./pages/Books";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initializeUserFromStorage } from "./redux/slices/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
      { path: "/books/:bookId", element: <SingleBook /> },
      { path: "/books/create", element: <Books /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    if (user && token) {
      dispatch(initializeUserFromStorage(user));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
