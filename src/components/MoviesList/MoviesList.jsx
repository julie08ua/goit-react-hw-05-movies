import { Link, useLocation } from "react-router-dom";

export const MoviesList = ({ movies }) => {
  const location = useLocation();

     const correctPathname = id => {
    return location.pathname === '/movies' ? `${id}` : `movies/${id}`;
  };
    
  return (
      <>
        <ul>
            {movies.map(({ id, title }) => 
                <li key={id}>
                    <Link to={correctPathname(id)} state={{ from: location }}>
                        {title}
                    </Link>
                </li>
            )}
        </ul>
    </>
  );
};