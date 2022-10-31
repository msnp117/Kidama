

import './home.css'
import kida from '../../assets/imgs/kida.png'
import voces from '../../components/Voces/voces'

export default function Home() {

  const text = "¡Hola!  Bienvenido a Kidama, yo soy Kida. ¡Vamos a divertirnos juntos!"

  return (
    <div  onClick={() => voces(text)}  className="home p-4">
      <div className="cuadro-de-texto d-flex align-items-center m-auto bg-white">
        <p>
          ¡Hola!
          <br />
          Bienvenido a Kidama, yo soy Kida <br />
          ¡Vamos a divertirnos juntos!
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
