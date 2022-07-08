import { NavLink } from "react-router-dom";


export default function Navbar() {

    return (
		<header className="header py-2 px-md-5">
			<nav className="navbar navbar-expand-md bg-transparent">

				<div className="container-fluid">

					<NavLink className="navbar-brand d-flex align-items-center"  to="/">
						<img className="logo p-2" src="https://cdn.pixabay.com/photo/2013/07/13/11/43/cat-158514_640.png" alt="" />
						<h1 className="h3">Small Helps</h1>
					</NavLink>

					<button className="navbar-toggler" 
						type="button" 
						data-bs-toggle="collapse" 
						data-bs-target="#navbarSupportedContent" 
						aria-controls="navbarSupportedContent" 
						aria-expanded="false" 
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

						<div className="d-flex flex-column text-center">
							
							<h2 className="h5">
								¿Qué quieres aprender?
							</h2>

							<ul className="navbar-nav">
								<li className="nav-item">
									<NavLink className="nav-link" to="/abc">Abecedario</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/">Vocales</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/">Silabas</NavLink>
								</li>
								<li className="nav-item">
									<NavLink className="nav-link" to="/">Palabras</NavLink>
								</li>
							</ul>
						
						</div>
					</div>

				</div>

			</nav>
		</header>
    )
}