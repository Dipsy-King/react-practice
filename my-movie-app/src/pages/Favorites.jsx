import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
	const { favorites } = useMovieContext();

	if (favorites.length > 0) {
		return (
			<div>
				<h2>Favorite movies:</h2>
				<div className="movies">
					{favorites.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="favotires-empty">
				<h2>No favorite movies yet</h2>
				<p>Start adding movies to your favorites and they will appear here!</p>
			</div>
		</>
	);
}
