import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../layouts/Home";
import CategoryNews from "../components/pages/CategoryNews";

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
    path: "/news",
    element: <div>Hello world news!</div>,
  },
  {
    path: "/news",
    element: <div>Hello world news!</div>,
  },
  {
    path: "/auth",
    element: <div>Hello world login!</div>,
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
export default router;
