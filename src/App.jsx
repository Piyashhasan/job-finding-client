import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import auth from "./firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser, toggleLoading } from "./features/auth/authSlice";

function App() {
  const { isLoading } = useSelector((state) => state.auth);
  console.log(isLoading);
  
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user?.email;
        dispatch(setUser(email));
      } else {
        dispatch(toggleLoading());
      }
    });
  }, [dispatch]);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
