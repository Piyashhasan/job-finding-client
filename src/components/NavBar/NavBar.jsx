import { useState } from "react";
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../../assets/img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";
import { logOut } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

const NavBar = () => {
  const { email, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [click, setClick] = useState(false);
  const closeMobileNav = () => {
    setClick(false);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(logOut());
        toast.success("Successfully Log out..", { id: "auth" });
      })
      .catch((error) => {
        console.log("error from logOut handler button");
        console.log(error);
      });
  };

  return (
    <nav className="nav_container bg-white sticky top-0 ">
      <div className="container flex items-center justify-between py-3">
        <div>
          <Link to="/" className="navbar-brand fw-bold">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul
            className={
              click
                ? "nav nav_menu active"
                : "nav nav_menu flex items-center justify-between space-x-5"
            }
          >
            <li className="nav-item " onClick={closeMobileNav}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold activeLink"
                    : "font-bold hover:text-green-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={closeMobileNav}>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold activeLink"
                    : "font-bold hover:text-green-500"
                }
              >
                Jobs
              </NavLink>
            </li>
            

            {email && !role && (
              <li
                className="nav-item nav-item bg-[#00bf58] py-2 px-5 rounded-full text-white hover:bg-[#244034] cursor-pointer"
                onClick={closeMobileNav}
              >
                <NavLink
                  to="/get-start"
                  className={({ isActive }) =>
                    isActive ? "font-bold " : "font-bold "
                  }
                >
                  Get-Start
                </NavLink>
              </li>
            )}

            {email && role && (
              <li className="nav-item" onClick={closeMobileNav}>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? "font-bold activeLink"
                      : "font-bold hover:text-green-500"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            )}

     

            {email ? (
              <li
                className="nav-item bg-[#00bf58] py-2 px-5 rounded-full text-white hover:bg-[#244034] cursor-pointer"
                onClick={closeMobileNav}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-bold"
                  }
                  onClick={handleSignOut}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <li
                className="nav-item bg-[#00bf58] py-2 px-5 rounded-full text-white hover:bg-[#244034] cursor-pointer"
                onClick={closeMobileNav}
              >
                <NavLink
                  to="/sign-in"
                  className={({ isActive }) =>
                    isActive ? "font-bold" : "font-bold"
                  }
                >
                  Sign In
                </NavLink>
              </li>
            )}
            {/* <li
              className="nav-item bg-[#00bf58] py-2 px-5 rounded-full text-white hover:bg-[#244034] cursor-pointer"
              onClick={closeMobileNav}
            >
              <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                  isActive ? "font-bold" : "font-bold"
                }
              >
                Sign In
              </NavLink>
            </li> */}
          </ul>
        </div>

        <div className="toggle_btn bg-[#00BF58] px-4 py-2 rounded text-xl text-white">
          <button
            className="flex items-center justify-center"
            onClick={() => setClick(!click)}
          >
            {click ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
