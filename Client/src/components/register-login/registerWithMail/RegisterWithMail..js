import axios from "axios";
import { useState } from "react";

export default function RegisterWithMail() {
  const [inputs, setInputs] = useState({
    correo: "",
    nombre: "",
    contraseña: "",
  });

  const [mensaje, setMensaje] = useState();
  const [loading, setLoading] = useState(false);

  const { correo, nombre, contraseña } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (nombre !== "" && correo !== "" && contraseña !== "") {
      const Usuario = {
        nombre,
        correo,
        contraseña,
      };
      setLoading(true);
      await axios
        .post("http://localhost:4000/user/register", Usuario)
        .then(({ data }) => {
          setMensaje(data.mensaje);
          setInputs({ correo: "", nombre: "", contraseña: "" });
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
    <div>
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel3">
                Registrarse con correo electrónico
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
                  <label htmlFor="" className="form-label">
                    Nombre de usuario
                  </label>
                  <input
                    className="form-control"
                    value={nombre}
                    onChange={(e) => onChange(e)}
                    type="text"
                    id="nombre"
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="off"
                  />
                </div>

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
                  {loading ? "Cargando..." : "Registrarme"}
                </button>

                {mensaje && <div>{mensaje}</div>}
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
