import { Link } from "react-router-dom"

export default function HomePage() {

    return (

        <>
            <h1>Home Page</h1>
            <Link to='/movies'>
                <button type="button" className="btn btn-dark">Go to the list!</button>
            </Link>
        </>
    )
}