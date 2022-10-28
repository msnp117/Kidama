import { Link } from "react-router-dom";
import "./abcPage.css";
import SoundIco from "../../assets/imgs/sound-ico.png";
import CaligIco from "../../assets/imgs/caligrafia-icono.png";

export default function AbcPage() {
  return (
    <div className="p-4">
      <h1>Abecedario</h1>
      <div className="opciones">
        <Link to="/abc/sonidos" className="opcion">
          <img className="opimg" src={SoundIco} alt="" />
          <h4>Sonidos del abecedario</h4>
        </Link>

        <Link to="/abc/canvas" className="opcion">
          <img className="opimg" src={CaligIco} alt="" />
          <h4>Caligrafía</h4>
        </Link>
      </div>
    </div>
  );
}
