import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/main/Home";
import NotFound from "../components/NotFound/NotFound";
import Dashboard from "../layout/Dashboard/Dashboard";
import SignIn from "../pages/main/SignIn";
import SignUp from "../pages/main/SignUp";
import Jobs from "../pages/main/Jobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
