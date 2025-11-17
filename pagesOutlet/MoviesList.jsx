import { useEffect, useState } from "react";
import axios from "axios";
import ComponentsMovieList from "../components/ComponentsMoviesList";

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

                <ComponentsMovieList movies={movies} />


            </div>

        </>

    )
}