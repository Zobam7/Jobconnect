import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink} from "react-router-dom";
import { withRouter } from "react-router-dom";
import "./navbar.css";

const Newnavbar = () => {
  const [Navb, setNavb] = useState(false);
  const [NavC, setNavC] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavb(true);
    } else {
      setNavb(false);
    }
  };
  const colorBackground = () => {
    if (!window.click) {
      setNavC(true);
    } else {
      setNavC(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  window.addEventListener("click", colorBackground);
  const signout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("username")
    sessionStorage.removeItem("email")    
  }
  const auth = () => {
    const token = sessionStorage.getItem("token")
    let menu = (
        <ul className="navbar-nav ml-auto text-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
            <button className="btn btn-danger text-white">
              <LockOpenIcon /> Login
            </button>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/register">
            <button className="btn btn-danger">
              <LoginIcon /> Register
            </button>
          </NavLink>
        </li>
      </ul>
    )
    if (token !== null) {
      menu = <ul className="navbar-nav ml-auto text-center">
      <li className="nav-item">
        <NavLink className="nav-link" to="/profilenav">
          <button className="btn btn-danger text-white">
          <AccountCircleIcon/> {sessionStorage.getItem("username")}
          </button>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login" onClick={signout}>
          <button className="btn btn-danger" >
             <LogoutIcon />Log Out
          </button>
        </NavLink>
      </li>
    </ul>

    }
    return menu
  }
  return <div>
      <div className={Navb ? "topbar active" : "topbar"}>
        <nav
          className={
            NavC
              ? "navbar navbar-expand-lg navbar-dark sticky-top changeBackground navclass"
              : "navbar navbar-expand-lg navbar-dark sticky-top navclass"
          }
        >
          <NavLink className="navbar-brand" to="/">
            <div className="App">
              <span
                style={{
                  color: "white",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  backgroundColor: "black",
                  padding: "2px",
                }}
              >
                Job
              </span>
              <span
                style={{
                  color: "red",
                  fontSize: "28px",
                  fontWeight: "bolder",
                  padding: "3px",
                }}
              >
                Connect
              </span>
            </div>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
            onClick={colorBackground}
          >
            <ul className="navbar-nav mr-auto text-center">
              <li className="nav-item">
                <NavLink className="nav-link" to="/browsejobs">
                  All Jobs <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addjobs">
                  Post Jobs <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/managejobs">
                  Manage Jobs <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/addresume">
                  Add Resume <span className="sr-only">(current)</span>
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/manageresume">
                  Manage Applications <span className="sr-only">(current)</span>
                </NavLink>
              </li>
            </ul>
            {auth()}
          </div>
        </nav>
      </div>
  </div>;
};

export default withRouter(Newnavbar);
