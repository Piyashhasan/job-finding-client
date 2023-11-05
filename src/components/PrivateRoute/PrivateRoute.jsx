import { useSelector } from "react-redux";
import { Navigate,  useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const { email, isLoading } = useSelector((state) => state.auth);
  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading ...</p>;
  }

  if (!isLoading && !email) {
    return <Navigate to="/sign-in" state={{ path: pathname }} />;
  }

  return children;
}

export default PrivateRoute;
