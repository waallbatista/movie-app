const MovieList = ({ movies }) => (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <p>{movie.category}</p>
        </div>
      ))}
    </div>
  );
  
  export default MovieList;
  