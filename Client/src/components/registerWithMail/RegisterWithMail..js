export default function RegisterWithMai() {
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
              <label htmlFor="">Nombre de usuario</label>
              <input type="text" />

              <label htmlFor="">Correo electrónico</label>
              <input type="mail" />

              <label htmlFor="">Contraseña</label>
              <input type="password" />

              <button type="submit">Resgistrarse</button>
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
