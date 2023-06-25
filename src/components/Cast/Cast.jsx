import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "services/API";
import defaultPhoto from './avatar.jpg'

const Cast = () => {
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    
  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        const response = await getMovieCast(movieId);
        setCast(response.cast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCast();
  }, [movieId]);
    
    return (
    <>
        {loading && <Loader />}
        
        {error && !loading && <p>Error: {error}</p>}

        <ul>
          {cast.map(({ character, name, profile_path, id }) => (
            <li key={id}>
                <img
                  height="200"
                src={profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultPhoto}
                  alt={name}
                />
              <p>Name: {name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      </>
    );
}

export default Cast;