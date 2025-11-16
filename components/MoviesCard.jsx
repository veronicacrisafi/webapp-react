import { Link } from "react-router-dom"

//ha bisogno della prop che ho passato nel MovieList insieme alla key
export default function MoviesCard({ movie }) {


    return (
        <>
            <div className="col-4 py-3">
                <div className="card">
                    <Link to={`/movies/${movie.id}`}>
                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                    </Link>
                    <div className="card-body">
                        <h4 className="card-title">{movie.title}</h4>
                        <p>{movie.genre}</p>
                        <p>{movie.release_year}</p>
                        <Link to={`/movies/${movie.id}`}>
                            <button className="btn btn-dark">Add More</button>
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}