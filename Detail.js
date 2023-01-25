import { func } from "prop-types";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState("")

    const {id} = useParams()
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
           ).json();
           console.log(json.data)
           setMovie(json.data.movie)
           setLoading(false);
    };
    useEffect(() => {
       getMovie();
    }, []);

    return (
        <div>
        <div>
            <h2>
                {movie.title_long} <Link to="/">more</Link>
            </h2>
            <div>
                <img src = {movie.large_cover_image} alt="" />
            </div>
            <div>
                { movie.genres ? (
                    <>
                    <h3>Ganres</h3>
              <ul>
                {movie.genres.map((genre) => (
                  <li key={genre}>{genre}</li>
                ))}
              </ul>
            </>
          ) : null}
        
            </div>
        </div>
        </div>
        
    )

    /* 결론 map 안돌려도 되는데 돌림, return 사용하는 방법을 생각안함, 너무 복잡하게 생각함 */
}
export default Detail;