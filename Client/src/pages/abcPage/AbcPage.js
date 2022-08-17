import { Link } from "react-router-dom"
import './abcPage.css'

export default function AbcPage(){
    return (
        <div className="d-flex flex-column align-items-center cont">
            <h1>Abecedario</h1>
            <Link to="/abc/sonidos" className="btn">Sonidos del abecedario</Link>

            <Link to="/abc/canvas" className="btn">Canvas</Link>
        </div>
    )
}