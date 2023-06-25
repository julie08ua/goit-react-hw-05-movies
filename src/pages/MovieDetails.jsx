import { Loader } from "components/Loader/Loader";
import MovieInfo from "components/MovieInfo/MovieInfo";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "services/API";

const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const { movieId } = useParams();

    const goBack = location.state?.from ?? '/';

  useEffect(() => {
      const getMovie = async () => {
        try {
            setLoading(true);
            const response = await getMovieDetails(movieId);
            setMovie(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
      };
    getMovie();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}

      {error && !loading && <p>Error: {error}</p>}

      <MovieInfo movie={movie} goBack={goBack} />
    </>
  );
}

export default MovieDetails;