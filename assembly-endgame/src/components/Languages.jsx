export default function Languages({ wrongGuessesCounter, languages }) {
	let languagesToLoose = wrongGuessesCounter;
	return (
		<section className="languages-section">
			<div className="languages-section-container">
				{languages.map((language, index) => {
					const cssStyle = {
						backgroundColor: language.backgroundColor,
						color: language.color,
					};
					let cssClasse = "";
					if (languagesToLoose > 0) {
						cssClasse = "lost";
						languagesToLoose--;
					}
					return (
						<span
							key={language.name}
							className={
								cssClasse
									? `languages-section-container-span ${cssClasse}`
									: "languages-section-container-span"
							}
							style={cssStyle}
						>
							{language.name}
						</span>
					);
				})}
			</div>
		</section>
	);
}
