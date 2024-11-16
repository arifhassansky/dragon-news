import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../components/pages/CategoryNews";
import Auth from "../layouts/Auth";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import NewsDetails from "../components/pages/NewsDetails";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Navigate to="category/01"></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/news/:id",
    element: (
      <PrivateRoute>
        {" "}
        <NewsDetails />{" "}
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
export default router;
