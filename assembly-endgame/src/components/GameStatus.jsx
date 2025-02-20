export default function GameStatus({ message }) {
	const messageData = message();
	console.log(messageData);
	const cssClasses = `game-status ${messageData.css}`;
	return (
		<section className={cssClasses}>
			<h2>{messageData.title}</h2>
			<p>{messageData.text}</p>
		</section>
	);
}
