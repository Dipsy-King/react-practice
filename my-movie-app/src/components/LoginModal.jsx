import { useState } from "react";

export default function LoginModal({ ref }) {
	const [isRotated, setIsRotated] = useState(false); // State to track the rotation

	const handleFlip = () => {
		setIsRotated(!isRotated); // Toggle the rotation state
	};

	return (
		<>
			<dialog ref={ref}>
				<form className="modal-container" method="dialog">
					<button type="button" onClick={handleFlip}>
						Sign Up
					</button>
					<div className={`modal-content ${isRotated ? "flipped" : ""}`}>
						<div className="front">frohnt</div>
						<div className="back">back</div>
					</div>
					<button>Close</button>
				</form>
			</dialog>
		</>
	);
}
