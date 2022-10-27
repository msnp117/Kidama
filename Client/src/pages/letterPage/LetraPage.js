
import { useParams } from 'react-router-dom';
import Letras from '../../json/abecedario.json';
import Navbar2 from '../../components/navbar2/Navbar2';
import kida2 from '../../assets/imgs/kida-2.png'

import './letrapage.css'

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
                            <div className="cuadro-con-letra bg-white rounded d-flex align-items-center justify-content-center">
                                <p className="">{Letra.letra.toUpperCase()}</p>
                            </div>
                        </div>
            
                        <div className="d-flex flex-column text-start">
                            <div className="ej ej1 d-flex align-items-center gap-5 my-2">
                                <img className="img" src={Letra.image1} alt="" />
                                <p className='fs-3'>{Letra.text1.toUpperCase()}</p>
                            </div>
                            <div className="ej ej2 d-flex align-items-center gap-5 my-2">
                                <img className="img" src={Letra.image2} alt="" />
                                <p className='fs-3'>{Letra.text2.toUpperCase()}</p>
                            </div>
                            <div className="ej ej3 d-flex align-items-center gap-5 my-2">
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