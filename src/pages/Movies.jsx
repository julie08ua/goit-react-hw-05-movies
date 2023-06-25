import { MoviesList } from "components/MoviesList/MoviesList";
import { SearchBox } from "components/SearchBox/SearchBox";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "services/API";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const name = searchParams.get("name") ?? "";

    useEffect(() => {
         if (!name) return;
        async function getMovie() {
            try {
                const response = await getMovieByName(name);
                setMovies(response.results);
            } catch (error) {
                setError(error.message);
            } 
        }
            getMovie();
    }, [name]);

    const updateSearch = e => {
        e.preventDefault();
        
        const searchName = e.target.value;
        if (searchName === '') {
            return setSearchParams({});
        }
        setSearchParams({ name: searchName });
  };

  return (
    <>
          <SearchBox value={name} onChange={updateSearch} />
           
          {error && <p>Error: {error}</p>}

          <MoviesList movies={movies} />

    </>
  );
};

export default Movies;