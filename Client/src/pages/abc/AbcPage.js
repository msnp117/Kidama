import { Link } from "react-router-dom";
import "./abcPage.css";
import SoundIco from "../../assets/imgs/sound-ico.png";
import CaligIco from "../../assets/imgs/caligrafia-icono.png";
import SimonDiceIco from "../../assets/imgs/simondice-ico.png"
import AhorcadoIco from '../../assets/imgs/ahorcado-ico.png'
import ViboritaIco from '../../assets/imgs/viborita-ico.png'
import SumaIco from '../../assets/imgs/suma-ico.png'
import MemoramaIco from '../../assets/imgs/memorama-ico.png'

export default function AbcPage() {
  return (
    <div className="p-4">
      <h1>Juegos</h1>
      <div className="opciones">
        <Link to="/abc/sonidos" className="opcion">
          <img className="opimg" src={SoundIco} alt="" />
          <h4>Sonidos del abecedario</h4>
        </Link>

        <Link to="/abc/canvas" className="opcion">
          <img className="opimg" src={CaligIco} alt="" />
          <h4>Caligrafía</h4>
        </Link>
        <Link to="/abc/simondice" className="opcion">
          <img className="opimg" src={SimonDiceIco} alt="" />
          <h4>Simon dice</h4>
        </Link>
        <Link to="/abc/ahorcado" className="opcion">
          <img className="opimg" src={AhorcadoIco} alt="" />
          <h4>Ahorcado</h4>
        </Link>
        <Link to="/abc/viborita" className="opcion">
          <img className="opimg" src={ViboritaIco} alt="" />
          <h4>Viborita</h4>
        </Link>
        <Link to="/abc/suma" className="opcion">
          <img className="opimg" src={SumaIco} alt="" />
          <h4>Suma</h4>
        </Link>
        <a href="https://kidama.netlify.app/src/pages/juegos/memorama/memorama.html" target="_BLANK" className="opcion">
          <img className="opimg" src={MemoramaIco} alt="" />
          <h4>Memorama</h4>
        </a>
      </div>
    </div>
  );
}
