import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";
import SingleBook from "./pages/SingleBook";
import Books from "./pages/Books";

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
  return <RouterProvider router={router} />;
}

export default App;
