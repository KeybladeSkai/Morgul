import NewCollection from "../pages/NewCollection/NewCollection";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from "../pages/Home/Home";

const AppRoute = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "newCollection",
      element: <NewCollection />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoute;
