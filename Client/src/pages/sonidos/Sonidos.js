import { Link } from "react-router-dom";
import Letras from "../../json/abecedario.json";

export default function Sonidos() {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex w-75 align-items-center">
        <Link to="/abc">
          <button className="btn">
            <i className="bi bi-arrow-bar-left"> </i>
            Volver
          </button>
        </Link>
        <h1 className="flex-grow-1">Sonidos del abecedario</h1>
      </div>
      <div className="list-group w-75">
        {Letras.map((Letra) => (
          <Link
            className="list-group-item list-group-item-action"
            key={Letra.id}
            to={`/abc/${Letra.letra}`}
          >
            {Letra.letra.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
}
