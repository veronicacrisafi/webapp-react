//qui scriveremo il markup per header
//inseriremo una navbar con i NavLink per dirottarci alla pagina dedicata+ search

export default function AppHeader() {

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-dark bg-gradient ">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-link">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>
                            <li className="nav-link">
                                <a className="nav-link text-light" href="#">Link</a>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search a movie..." aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>

    )
};