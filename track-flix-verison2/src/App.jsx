import { use, useEffect, useState } from "react";
import "./App.css";
import hero from "./assets/hero.png";
import Search from "./components/Search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";
import { useDebounce } from "react-use";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [movieList, setMovieList] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [debounceSearchTerm, setDebounceTerm] = useState("");

	useDebounce(() => setDebounceTerm(searchInput), 1000, [searchInput]);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				accept: "application/json",
				Authorization: `Bearer ${API_KEY}`,
			},
		};

		setIsLoading(true);
		const fecthMovies = async (query = "") => {
			try {
				const endPoint = query ? API_BASE_URL + `/search/movie?query=${encodeURIComponent(query)}` : API_BASE_URL + "/discover/movie";
				const response = await fetch(endPoint, options);

				if (!response.ok) {
					throw new Error("Failed to fetch movies");
				}
				const data = await response.json();
				console.log(data);
				setMovieList(data.results);
			} catch (error) {
				console.log(error.message);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		};
		setTimeout(() => {
			console.log("Simulates loading");
			fecthMovies(debounceSearchTerm);
		}, 2000);
	}, [debounceSearchTerm]);

	return (
		<main>
			<div className="pattern"></div>
			<div className="wrapper">
				<header>
					<img src={hero} alt="hero banner" />
					<h1>
						Find <span className="text-gradient">movies</span> you'll enjoy witout hassle
					</h1>
					<Search searchInput={searchInput} setSearchInput={setSearchInput} />
				</header>

				<section className="all-movies">
					<h2 className="mt-[40px]">All Movies</h2>
					{isLoading ? (
						<Spinner />
					) : error ? (
						<p className="text-red-500">{error}</p>
					) : (
						<ul>
							{movieList.map((movie) => (
								<MovieCard key={movie.id} movie={movie} />
							))}
						</ul>
					)}
				</section>
			</div>
		</main>
	);
}

export default App;
