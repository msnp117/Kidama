
import { useParams } from 'react-router-dom';
// import Letras from '../../json/abecedario.json';
import Navbar2 from '../../components/navbar2/Navbar2';
import Letras from './letras'
import kida2 from '../../assets/imgs/kida-2.png'

import './letra.css'
import voces from '../../components/Voces/voces'

export default function Letra() {

    let { letra } = useParams();

    let una_letra = Letras.filter((l) => l.letra === letra);


    return (
        
        <div>
            {una_letra.map((Letra) => (
                <div className="d-flex flex-column" key={Letra.id}>           

                    <Navbar2 id={Letra.id} lista={Letras} title="Abecedario"/>

                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2 w-75 w-md-50 gap-4 m-auto" >
                       
                        <div className="gato-con-letra d-flex">
                            <img className='cat' src={kida2} alt="" />
                            <div onClick={() => voces(Letra.letra)} className="cuadro-con-letra bg-white rounded d-flex align-items-center justify-content-center">
                                <p className="">{Letra.letra.toUpperCase()}</p>
                            </div>
                        </div>
            
                        <div className="d-flex flex-column text-start">
                            <div onClick={() => voces(Letra.text1)} className="ej ej1 d-flex align-items-center gap-5 my-2">
                                <img className="img" src={Letra.image1} alt="" />
                                <p className='fs-3'>{Letra.text1.toUpperCase()}</p>
                            </div>
                            <div onClick={() => voces(Letra.text2)} className="ej ej2 d-flex align-items-center gap-5 my-2">
                                <img className="img" src={Letra.image2} alt="" />
                                <p className='fs-3'>{Letra.text2.toUpperCase()}</p>
                            </div>
                            <div onClick={() => voces(Letra.text3)} className="ej ej3 d-flex align-items-center gap-5 my-2">
                                <img className="img" src={Letra.image3} alt="" />
                                <p className='fs-3'>{Letra.text3.toUpperCase()}</p>
                            </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}