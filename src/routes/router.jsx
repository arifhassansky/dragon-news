import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
