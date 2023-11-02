import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/main/Home";
import NotFound from "../components/NotFound/NotFound";
import Dashboard from "../layout/Dashboard/Dashboard";
import SignIn from "../pages/main/SignIn";
import SignUp from "../pages/main/SignUp";
import Jobs from "../pages/main/Jobs";
import JobDetails from "../pages/main/JobDetails";
import GetStart from "../pages/main/GetStart";
import Candidate from "../pages/main/Candidate";
import Employer from "../pages/main/Employer";

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
        path: "/job-details",
        element: <JobDetails />,
      },
      {
        path: "/get-start",
        element: <GetStart />,
      },
      {
        path: "/candidate",
        element: <Candidate />,
      },
      {
        path: "/employer",
        element: <Employer />,
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
