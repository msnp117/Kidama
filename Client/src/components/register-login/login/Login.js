import { Link } from "react-router-dom";
import Register from "../registerOptions/RegisterOptions";
import "./login.css";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [inputs, setInputs] = useState({
    correo: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const { correo, contraseña } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/user/login", Usuario)
        .then(({ data }) => {
          setMensaje(data.mensaje);
          setInputs({ correo: "", contraseña: "" });
          setTimeout(() => {
            setMensaje("");
            setLoading(false);
          }, 1500);
        })
        .catch((err) => {
          console.error(err);
          setMensaje("Hubo un error");
          setTimeout(() => {
            setMensaje("");
            setLoading(false);
          }, 1500);
        });

      setLoading(false);
    }
  };
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
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="correo" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    className="form-control"
                    value={correo}
                    onChange={(e) => onChange(e)}
                    type="email"
                    id="correo"
                    name="correo"
                    placeholder="Correo"
                    autoComplete="off"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="contraseña" className="form-label">
                    Contraseña
                  </label>
                  <input
                    className="form-control"
                    value={contraseña}
                    onChange={(e) => onChange(e)}
                    type="password"
                    id="contraseña"
                    name="contraseña"
                    placeholder="Contraseña"
                    autoComplete="off"
                  />
                </div>
                <button type="submit" className="btn btn-secondary">
                  {loading ? "Cargando..." : "Iniciar sesión"}
                </button>

                {mensaje && <div>{mensaje}</div>}
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
        className="btn w-100 btn-secondary btn-login"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Iniciar sesión
      </a>
    </div>
  );
}
