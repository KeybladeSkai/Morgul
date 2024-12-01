import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import NewCollection from "./pages/NewCollection/NewCollection";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "newCollection", element: <NewCollection /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
