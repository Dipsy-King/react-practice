import searchIcon from "../assets/search.svg";

export default function Search({ searchInput, setSearchInput }) {
	return (
		<div className="search">
			<div>
				<img src={searchIcon} alt="search icon" />
				<input type="text" placeholder="Search for movie" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />
			</div>
		</div>
	);
}
