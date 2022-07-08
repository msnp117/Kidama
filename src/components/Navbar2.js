
import { Link } from "react-router-dom";


export default function Navbar2(props) {

    function encontrar_id (id, lista){
        let i = lista.find(l => l.id === id);
        return i;
    }

    function anterior(id, lista){
        if (id === 0){
            id = 1
        }

        let idAnt = id - 1;
        let i = encontrar_id(idAnt, lista);
        
        return i.letra;
    }

    function siguiente(id, lista){
        let idSig = id + 1;
        let i = encontrar_id(idSig, lista);
        return i.letra;
    }    

    return (
        <div className="nav2  d-flex justify-content-evenly align-items-center p-2 mb-3 border border-light fs-1">
            <Link to={`/abc/${anterior(props.id, props.lista)}`} className="link-dark">
                <i className='bx bx-left-arrow-circle'></i>
            </Link>
            <Link to="/abc" className="link-dark h2">
                {props.title}
            </Link>
            <Link to={`/abc/${siguiente(props.id, props.lista)}`} className="link-dark">
                <i className='bx bx-right-arrow-circle'></i>
            </Link>
        </div>
    )
}