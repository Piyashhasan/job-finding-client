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
import UserProfile from "../pages/dashboard/UserProfile";
import Check from "../pages/dashboard/Check";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <GetStart />
          </PrivateRoute>
        ),
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
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <UserProfile />,
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/check",
        element: (
          <PrivateRoute>
            <Check />,
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
