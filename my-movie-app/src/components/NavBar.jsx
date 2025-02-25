import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<>
			<nav className="header">
				<button className="header-btn">
					<Link to="/" className="btn2">
						<span className="spn2">TrackFLix</span>
					</Link>
				</button>
				<div className="link-container">
					<button className="header-btn">
						<Link to="/favorites" className="btn2">
							<span className="spn2">favorites</span>
						</Link>
					</button>
					<button className="header-btn">
						<Link to="/favorites" className="btn2">
							<span className="spn2">login</span>
						</Link>
					</button>
				</div>
			</nav>
		</>
	);
}
