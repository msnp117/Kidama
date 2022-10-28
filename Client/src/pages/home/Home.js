

import './home.css'
import kida from '../../assets/imgs/kida.png'

export default function Home() {
  return (
    <div className="p-4">
      <div className="cuadro-de-texto d-flex align-items-center m-auto bg-white">
        <p>
          ¡Hola!
          <br />
          Bienvenido a Kidama, yo soy Kida <br />
          Aqui puedes elegir lo que deseas aprender miau
        </p>
      </div>
      <img
        className="kida pt-5"
        src={kida}
        alt=""
      />
    </div>
  );
}
