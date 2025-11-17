import MoviesCard from "./MoviesCard"

export default function componentsMovieList({ movies }) {



    return (

        <>
            <section className="mb-4">
                <div className="container">
                    <div className="row">

                        {movies.map(movie => (
                            <MoviesCard key={movie.id} movie={movie} />
                        ))}

                    </div>

                    <div className="text-center">
                        <button className="btn btn-dark mt-5">Carica altri film</button>
                    </div>
                </div>
            </section>
        </>

    )
}