import { use, useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { getPopularMovies, searchMovies } from "../services/services";

export default function Home() {
	const [searchInput, setSearchInput] = useState("");
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function loadPopularMovies() {
			try {
				const popularMovies = await getPopularMovies();
				setMovies(popularMovies);
			} catch (error) {
				console.log(error);
				setError("Failed to load movies");
			} finally {
				setLoading(false);
			}
		}

		loadPopularMovies();
	}, []);

	async function handleSearch(event) {
		event.preventDefault();
		if (!searchInput.trim()) return;

		setLoading(true);
		if (loading) return;

		try {
			const searchResults = await searchMovies(searchInput);
			setMovies(searchResults);
			setError(null);
		} catch (error) {
			setError("failed to seach movie");
		} finally {
			setLoading(false);
		}
	}

	function handleInputSearchChange(event) {
		setSearchInput(event.target.value);
	}

	return (
		<>
			<div className="home">
				<form onSubmit={handleSearch} className="search-form">
					<input type="text" placeholder="search movie" className="search-input" onChange={handleInputSearchChange} value={searchInput} />
					<button type="submit" className="search-button">
						Search
					</button>
				</form>

				{error && <div className="error-message">{error}</div>}

				{loading ? (
					<div className="loading">Loading... </div>
				) : (
					<div className="movies">
						{movies.map((movie) => movie.title.toLocaleLowerCase().startsWith(searchInput) && <MovieCard key={movie.id} movie={movie} />)}
					</div>
				)}
			</div>
		</>
	);
}
