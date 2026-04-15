import "./Giovani.css";

const gruppi = [
	{
		titolo: "Gruppo Extreme",
		fascia: "3ª media - 1ª superiore",
		descrizione:
			"Inizia l'esperienza di gruppo: proposte per stare insieme, conoscere la comunità e avviare un cammino di fede.",
	},
	{
		titolo: "Gruppo 2-3sup",
		fascia: "2ª - 3ª superiore",
		descrizione:
			"Prosegue il cammino di fede con esperienze di servizio e possibilità di iniziare il percorso di animazione in oratorio.",
	},
	{
		titolo: "Gruppo 4-5sup",
		fascia: "4ª - 5ª superiore",
		descrizione:
			"Il percorso si approfondisce sulla scia di personaggi biblici, con crescita nella responsabilità e impegno stabile in oratorio.",
	},
	{
		titolo: "Gruppo Giovani",
		fascia: "dai 19 anni",
		descrizione:
			"Appuntamento settimanale per coltivare interiorità, fraternità e responsabilità nella vita personale e comunitaria.",
	},
];

function Giovani() {
	return (
		<article className="page page-giovani">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Percorsi giovani</p>
					<h2>Proposte per adolescenti e giovani adulti</h2>
					<p>La proposta formativa è articolata in quattro gruppi, accompagnati da animatori giovani e adulti.</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/giovani.jpg`}
					alt="Gruppi giovani"
					className="content-image giovani-hero-image"
				/>
			</header>

			<section className="timeline-cards">
				{gruppi.map((gruppo) => (
					<article className="plain-card" key={gruppo.titolo}>
						<h4>{gruppo.titolo}</h4>
						<p>
							<strong>{gruppo.fascia}</strong>
						</p>
						<p>{gruppo.descrizione}</p>
					</article>
				))}
			</section>

			<section className="content-section">
				<h3>Prossimi appuntamenti giovani</h3>
				<div className="calendar-frame-wrap small">
					<iframe
						title="Calendario giovani agenda"
						src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=aGVxa28wYzhvbGUzcmdlYzY0Y3FxZTE3amtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmtkNDY2aTBwcGw3amRydTA4Mm9zcTNhc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237CB342&color=%237aa300&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
						width="100%"
						height="380"
						style={{ border: 0 }}
						loading="lazy"
					/>
				</div>
			</section>
		</article>
	);
}

export default Giovani;
