import "./MovieList.css";
import movies from "./movies";

const MovieList = () => {
    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <img src={movie.image} alt={movie.title} />
                </div>
            ))}
        </div>
    );
};

export default MovieList;
