import { Link } from "react-router-dom";
import Register from "../register/Register";
import "./login.css";

export default function Login() {
  return (
    <div className="w-100 ms-md-3 mt-md-2 min-width">
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel">
                Iniciar sesión
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <label htmlFor="">Nombre de usuario o correo electrónico</label>
                <input type="text" />

                <label htmlFor="">Contraseña</label>
                <input type="password" />

                <button type="submit">Iniciar sesión</button>
              </form>

              <Link to="/">¿Has olvidado tu Contraseña?</Link>

              <hr />

              <button>Facebook</button>
              <button>Google</button>
            </div>
            <div className="modal-footer">
              <h6>¿No tienes una cuenta?</h6>

              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Registrate
              </button>
            </div>
          </div>
        </div>
      </div>

      <Register />

      <a
        className="btn w-100 btn-login"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Iniciar sesión
      </a>
    </div>
  );
}
