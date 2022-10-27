import './footer.css'

 export default function Footer() {
     return (

     <footer className="footer p-4">

          <div className="row gap-4 justify-content-center">

                <div className="col-12 col-md-6">
                    <form>
                        <div>
                            <p>Dinos tu opinión</p>
                        </div>
                        <textarea className="escribir p-3 mb-3 w-100 rounded"></textarea>
                        <input className="btn-enviar rounded w-100 p-2" type="submit" name=""/>
                    </form>
                </div>

                <div className="col-12 col-md-5">
                    <p>
                        ¿Qué es Kidama? <br/> 
                        Kidama es una aplicación web de juegos didácticos para reforzar algunos conocimientos básicos de los niños, motivándolos además con una mascota virtual que se podrá personalizar mediante las recompensas obtenidas en los juegos.
                    </p>
                    <div>
                        <p>Contactenos por:</p>
                        <div className="redes">
                            <i className='bi bi-facebook facebook'></i>
                            <i className='bi bi-instagram instagram'></i>
                            <i className='bi bi-envelope mail'></i>
                        </div>
                    </div>
                </div>

            </div>
		
	    </footer>
    
     )
 }