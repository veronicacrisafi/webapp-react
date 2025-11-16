import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios";

//mi prendo l'endpoint del mio server
const API_URL = "http://localhost:3000/movies";
export default function MovieDetails() {

    const { id } = useParams();
    console.log(id);

    //movie viene usato per prendere gli elementi che ci servono per la sostituzione successiva
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        //qui il mio endpoint deve essere dinamico in quanto devo prendere il singolo elemente tramite id destrutturato precedentemente
        axios.get(`${API_URL}/${id}`)
            .then(res => {
                console.log(res);
                setMovie(res.data)
            })
            .catch(err => {
                console.log(err);

            })


    }, [])


    return (

        <>


            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5 d-flex gap-4">
                    <div className="cover">
                        <img className="img-fluid" src={movie?.image} alt={movie?.title} />
                    </div>
                    <div className="details">
                        <h1 className="display-5 fw-bold">{movie?.title}</h1>
                        <p className="lead">
                            {movie?.abstract}
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            Example button
                        </button>
                    </div>
                </div>
            </div>

            <section className="mb-4">
                <div className="container">
                    <h4>Lascia la tua recensione!</h4>
                    <form>

                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Il tuo nome</label>
                            <input name="name" type="text" className="form-control" id="name" placeholder="..." />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">la tua recensione</label>
                            <textarea name="review" type="text" className="form-control" id="review" placeholder="..."></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Il tuo nome</label>
                            <select name="rating" className="form-select" id="rating">

                                <option value="1">1 - Poor</option>
                                <option value="2">2 - Fair</option>
                                <option value="3">3 - Good</option>
                                <option value="4">4 - Very Good</option>
                                <option value="5">5 - Excellent</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-dark">Invia</button>
                    </form>


                </div>


            </section>

            <section id="reviews">
                <div className="container">

                    {movie?.reviews.map(review => (

                        <div className="card p-3 m-3 position-relative" key={review.id}>
                            <h4>{review.name}</h4>
                            <p>{review.text}</p>
                            <div className="vote text-warning position-absolute top-0 end-0 m-2">

                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>

                            </div>


                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-12">


                    </div>
                </div>
            </section>


        </>
    )

}


