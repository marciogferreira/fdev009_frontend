import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">IWStore</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"  className="nav-link active">Painel</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" >Sair</a>
                        </li>
                    </ul>
                    <div>
                        <button className='btn btn-success btn-sm'>Doações</button>
                    </div>
                    </div>
                </div>
            </nav>   
        </>
    )
}