import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from 'components/Loader/Loader';
import { getTrendingMovies } from 'services/API';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getListTrendingMovies() {
            try {
                setLoading(true);

                const  dataTrendingMovies  = await getTrendingMovies();
                setMovies(dataTrendingMovies.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getListTrendingMovies();
    }, []);
    
    return (
        <>
            <h1>Trending today</h1>
            
            {loading && <Loader />}

            {error && <p>Error: {error}</p>}
            
            <MoviesList movies={movies}/>
        </>
    )
};

export default Home;