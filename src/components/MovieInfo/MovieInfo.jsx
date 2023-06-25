import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import { LinkBack, MovieInfoWrap, MovieWrap, GenresList } from "./MovieInfo.styled";

const MovieInfo = ({ movie, goBack }) => {
    if (!movie) {
    return;
  }

  const {
    title,
    release_date,
    overview,
    genres,
    poster_path,
    original_title,
    vote_average,
  } = movie;

  return (
    <>
      <LinkBack to={goBack}>Go Back</LinkBack>
      <MovieWrap>
          <img
            alt={original_title}
          src={`https://image.tmdb.org/t/p/w400${poster_path}`}
          />
        <MovieInfoWrap>
          <h2>{title}({release_date?.slice(0, 4)})</h2>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </MovieInfoWrap>
      </MovieWrap>

      <p>Additional information</p>
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