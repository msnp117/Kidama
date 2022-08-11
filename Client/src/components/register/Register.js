

import RegisterWithMail from "../registerWithMail/RegisterWithMail.";

export default function Register() {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalToggleLabel2">
                Registrarse
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <button>Facebook</button>
              <button>Google</button>
              <button
                className="btn btn-secondary"
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
              >
                Correo electrónico
              </button>
            </div>

            <div className="modal-footer">
              <h6>¿Ya tenés una cuenta?</h6>
              <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Inicia sesión
              </button>
            </div>

          </div>
        </div>
      </div>

      <RegisterWithMail/>
    </div>
  );
}
