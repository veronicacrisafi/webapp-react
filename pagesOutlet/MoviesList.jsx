import { useEffect, useState } from "react";
import axios from "axios";
import MoviesCard from "../components/MoviesCard";
import { Link } from "react-router-dom";

//mi prendo l'endpoint del mio server
const API_URL = "http://localhost:3000/movies";
export default function MovieList() {

    const [movies, setMovies] = useState([])


    //effettuo una chiamata axios
    useEffect(() => {
        axios.get(API_URL)
            .then(res => {
                console.log(res);
                setMovies(res.data)

            })
            .catch(err => {
                console.log(err.message);
            })

    }, [])

    return (
        <>
            <div className="p-5 bg-light rouded-3">
                <div className="container py-5">
                    <h1 className="display-4 fw-bold">Film Collection</h1>
                    <p className="col-md-8 fs4 lead">
                        Visualizza la lista dei Film e le sue recensioni!
                    </p>
                </div>

                <section className="mb-4">
                    <div className="container">
                        <div className="row">

                            {movies.map(movie => (
                                <div className="col-4 py-3" key={movie.id}>
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
                            ))}

                        </div>

                        <div className="text-center">
                            <button className="btn btn-dark mt-5">Carica altri film</button>
                        </div>
                    </div>
                </section>

            </div>

        </>

    )
}