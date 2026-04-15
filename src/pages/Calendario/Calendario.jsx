import "./Calendario.css";

function Calendario() {
	return (
		<article className="page page-calendario">
			<header className="page-hero page-hero-calendar">
				<div>
					<p className="eyebrow">Agenda comunitaria</p>
					<h2>Calendario attività</h2>
					<p>
						Vista settimanale del calendario parrocchiale con appuntamenti liturgici, pastorali, oratorio,
						catechismo e giovani.
					</p>
				</div>
			</header>

			<section className="content-section">
				<div className="calendar-frame-wrap full">
					<iframe
						title="Calendario completo Parrocchia Natale del Signore"
						src="https://calendar.google.com/calendar/embed?height=506&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=cGFycm9jY2hpYS5uYXRhbGVkZWxzaWdub3JlQGdtYWlsLmNvbQ&src=NTFyNDZpOTI1Nmg4dG1xYmxqYmRycXZrdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bnI4ZnBoc2YwY3FwN2M1OGlzOGdsY2YxZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aGVxa28wYzhvbGUzcmdlYzY0Y3FxZTE3amtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmtkNDY2aTBwcGw3amRydTA4Mm9zcTNhc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHNiNnBrZDNiYW00bmNobnE2MDdlNXFjaXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239762cc&color=%23F09300&color=%23F6BF26&color=%237CB342&color=%237aa300&color=%23D81B60&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
						width="100%"
						height="560"
						style={{ border: 0 }}
						loading="lazy"
					/>
				</div>
			</section>
		</article>
	);
}

export default Calendario;
