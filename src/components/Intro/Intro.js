// TopRatedMovies 컴포넌트
import { useEffect, useState } from "react";
import { useGetTopRatedMoviesQuery } from "../../store/modules/fetch";

const TopRatedMovies = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { data, isLoading, isError } = useGetTopRatedMoviesQuery({
    api_key: API_KEY,
    language: "en-EN",
  });
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // 쉽게 보기 위하여 타이머를 설정
    const timeoutId = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (isLoading || showLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {data.results.map((movie) => (
          <li key={movie.id}>
            <div>{movie.title}</div>
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
            <div>{movie.tagline}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRatedMovies;
