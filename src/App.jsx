import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/SignUp";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/signup", element: <SignupPage /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
