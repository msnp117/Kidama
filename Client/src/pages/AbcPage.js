import { Link } from "react-router-dom";
import Letras from '../json/abecedario.json';

export default function AbcPage() {
    return (
        <div className="d-flex flex-column align-items-center">
            <h1>Abecedario</h1>
            <div className="list-group w-75">
                {Letras.map(Letra => (
                    <Link 
                        className="list-group-item list-group-item-action"
                        key={Letra.id} 
                        to={`/abc/${Letra.letra}`}>
                            {Letra.letra.toUpperCase()}
                    </Link>
                ))}
            </div>
        </div>
    )
}