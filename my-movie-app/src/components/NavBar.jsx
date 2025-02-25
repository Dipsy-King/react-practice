import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

export default function NavBar() {
	const loginRef = useRef();

	const handleOpen = () => {
		loginRef.current.showModal();
	};

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
					<button className="header-btn" onClick={handleOpen}>
						<div className="btn2">
							<span className="spn2">login</span>
						</div>
					</button>
				</div>
			</nav>

			<LoginModal ref={loginRef} />
		</>
	);
}
