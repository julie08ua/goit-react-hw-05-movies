import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

const MovieInfo = ({ movie, goBack }) => {
    if (!movie) {
    return;
  }

  const {
    title,
    release_date,
    popularity,
    overview,
    genres,
    poster_path,
    original_title,
  } = movie;

  return (
    <>
      <Link to={goBack}>Go Back</Link>
      <div>
          <img
            alt={original_title}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        <div>
          <h2>"{title}"</h2>
          <p>Release date: {release_date}</p>
          <p>User Score: {popularity}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul>
        <li>
          <Link to="cast" state={{ from: goBack }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: goBack }}>
            Reviews
          </Link>
        </li>
      </ul>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default MovieInfo;