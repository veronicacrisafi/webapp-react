//qui scriveremo il markup per il footer
export default function AppFooter() {

    return (
        <>

            <div className="d-flex bg-dark bg-gradient justify-content-between">
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="#">
                            Bootstrap
                        </a>
                    </div>
                </nav>

                <ul className="nav nav-pills nav-fill">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>

                </ul>
            </div>





        </>

    )
}