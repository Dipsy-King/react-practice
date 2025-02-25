export default function LoginModal({ ref }) {
	return (
		<>
			<dialog ref={ref}>
				<h1>Login</h1>
				<form method="dialog">
					<button>Close</button>
				</form>
			</dialog>
		</>
	);
}
