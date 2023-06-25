import { Loader } from "components/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "services/API";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    
  useEffect(() => {
    const getReviews = async () => {
      try {
        setLoading(true);
        const response = await getMovieReviews(movieId);
        setReviews(response.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    getReviews();
  }, [movieId]);
    
    return (
    <>
        {loading && <Loader />}
        
        {error && !loading && <p>Error: {error}</p>}
    
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <li key={id}>
                <h4>Author: {author}</h4>
                <p>{content}</p>
              </li>
            ))
          ) : (
              <p>This movie has no reviews:(</p>
          )}
        </ul>
    </>
  );
}

export default Reviews;