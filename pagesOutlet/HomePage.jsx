import { NavLink } from "react-router-dom"

export default function HomePage() {

    return (

        <>
            <h1>Home Page</h1>
            <NavLink to='/movies'>
                <button type="button" className="btn btn-dark">Go to the list!</button>
            </NavLink>
        </>
    )
}