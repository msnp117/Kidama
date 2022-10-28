import { NavLink } from "react-router-dom";
import "./navbar.css";
import Login from "../register-login/login/Login";
import logo from "../../assets/imgs/logo.png";

export default function Navbar() {
  return (
    <header className="header px-md-5">
      <nav className="navbar navbar-expand-md bg-transparent p-0">
        <div className="container-fluid">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img className="logo" src={logo} alt="" />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end w-50"
            id="navbarSupportedContent"
          >
            <div className="d-flex flex-column flex-md-row ">
              <div className="text-center">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/abc">
                      Juegos
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Mascota
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Biblioteca
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Tienda
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <Login />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
