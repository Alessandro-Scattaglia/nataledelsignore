import "./Catechismo.css";

function Catechismo() {
	return (
		<article className="page page-catechismo">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Percorso 2025-2026</p>
					<h2>Catechismo</h2>
					<p>Informazioni per famiglie e ragazzi dalla 3ª elementare alla 2ª media.</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/catechismo.jpg`}
					alt="Catechismo"
					className="content-image catechismo-hero-image"
				/>
			</header>

			<section className="grid-two">
				<article className="info-card accent-secondary">
					<h3>Età</h3>
					<p>La proposta è per i nati dal 2017 al 2013 (3ª elementare - 2ª media).</p>
				</article>

				<article className="info-card accent-green">
					<h3>Orari incontri</h3>
					<p>
						Incontri quindicinali per tutti, normalmente il venerdì dalle 19:00 alle 20:30.
						<br />
						Alcune volte il sabato pomeriggio o la domenica mattina.
					</p>
				</article>
			</section>

			<section className="content-section">
				<article className="info-card accent-gold">
					<h3>Coinvolgimento famiglie</h3>
					<p>
						Sono previsti alcuni incontri con i genitori (all&apos;incirca 4-5 durante l&apos;anno), negli stessi orari in
						cui già si incontrano i figli.
					</p>
				</article>
			</section>

			<section className="content-section">
				<h3>Prossimi appuntamenti giovani/catechismo</h3>
				<div className="calendar-frame-wrap small">
					<iframe
						title="Calendario catechismo agenda"
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

export default Catechismo;
