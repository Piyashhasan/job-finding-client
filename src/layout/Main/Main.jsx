import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const Main = () => {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Main;
