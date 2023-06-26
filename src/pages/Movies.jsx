import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "services/API";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const name = searchParams.get("name");

    useEffect(() => {
         if (!name) return;
        async function getMovie() {
            try {
                setIsLoading(true);
                const response = await getMovieByName(name);
                
                setMovies(response.results);
            } catch (error) {
                console.log(error);
            } 
            finally {
        setIsLoading(false);
      }
        }
            getMovie();
    }, [name]);

  return (
    <>
        <SearchBox />

        {isLoading && <Loader />}
         
          <MoviesList movies={movies} />
    </>
  );
};

export default Movies;