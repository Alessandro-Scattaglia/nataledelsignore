import "./Home.css";

const festaProgramma = [
	{
		giorno: "Venerdì 3 ottobre",
		eventi: [
			"18:30 - Santa Messa e Adorazione fino alle 20:00",
			"20:00 - Apericena condivisa (iscrizione tramite form o in segreteria)",
			"21:00 - Serata musicale",
		],
	},
	{
		giorno: "Sabato 4 ottobre",
		eventi: [
			"10:00 - Biciclettata per le strade del quartiere",
			"14:00 - Inizio tornei e apertura bar",
			"18:30 - Lectio Divina (non ci sarà la Messa)",
		],
	},
	{
		giorno: "Domenica 5 ottobre",
		eventi: [
			"11:00 - Messa comunitaria con don Fabio",
			"A seguire - Pranzo comunitario (offerta 15 euro, iscrizione richiesta)",
			"14:30 - Finali dei tornei",
			"Pomeriggio - Torneo di Nonna Papera",
			"17:30 circa - Momento conclusivo",
		],
	},
];

function Home() {
	return (
		<article className="page page-home">
			<header className="page-hero page-hero-home">
				<div>
					<p className="eyebrow">Comunità in cammino</p>
					<h2>Benvenuti nella Parrocchia Natale del Signore</h2>
					<p>
						Uno spazio per restare uniti nella fede e nella vita quotidiana della comunità: orari, attività,
						iniziative di carità, appuntamenti e percorsi di crescita.
					</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/DSC2144.jpg`}
					alt="Foto chiesa"
					className="content-image home-hero-image"
				/>
			</header>

			<section className="grid-two">
				<article className="info-card accent-secondary">
					<h3>Canale YouTube</h3>
					<p>Segui dirette, materiali e comunicazioni della comunità.</p>
					<p>
						<a href="http://www.youtube.com/channel/UCimGbVpSKU-d7X4eIvm0ZAw" target="_blank" rel="noreferrer">
							Apri il canale YouTube
						</a>
					</p>
				</article>

				<article className="info-card accent-secondary">
					<h3>Canale WhatsApp</h3>
					<p>Per aggiornamenti veloci su appuntamenti e iniziative.</p>
					<p>
						Link iscrizione: <a href="http://bit.ly/CanaleNDS">bit.ly/CanaleNDS</a>
					</p>
					<img
						src={`${import.meta.env.BASE_URL}img/canaleWhatsapp.jpg`}
						alt="QR Canale WhatsApp"
						className="content-image home-whatsapp-image"
					/>
				</article>
			</section>

			<section className="content-section">
				<h3>Diamoci una mano</h3>
				<div className="info-card accent-green">
					<p>
						Se hai una necessità (per esempio una spesa urgente), se hai bisogno di aiuto oppure se vuoi offrire
						un piccolo servizio agli altri, puoi:
					</p>
					<ul>
						<li>telefonare in parrocchia: 011.352013 (martedì, giovedì o venerdì dalle 10:00 alle 12:00)</li>
						<li>
							scrivere a San Vincenzo: <a href="mailto:sanvincenzo.nataledelsignore@gmail.com">sanvincenzo.nataledelsignore@gmail.com</a>
						</li>
					</ul>
					<p>
						Approfondimento nella sezione <a href="/nataledelsignore/carita">Carità</a>.
					</p>
				</div>
			</section>

			<section className="grid-two">
				<article className="info-card accent-gold">
					<h3>Sostegno alla parrocchia</h3>
					<p>Progetti sostenuti: persone in difficoltà, spese ordinarie della comunità, progetto migranti.</p>
					<p>
						IBAN: <strong>IT88Q0623001137000046359622</strong>
						<br />
						Banca: Credit Agricole
						<br />
						Intestato a: Parrocchia Natale del Signore
						<br />
						Causali: Persone in difficoltà, Offerta, Migranti
					</p>
					<p>Puoi anche contribuire con offerte dopo le Messe o con alimenti nelle ceste in fondo alla chiesa.</p>
				</article>

				<article className="info-card accent-secondary">
					<h3>Sostegno Oratorio</h3>
					<p>Per attività giovani e oratorio.</p>
					<p>
						IBAN: <strong>IT71T0304801004000000085432</strong>
						<br />
						Banca: Banca del Piemonte
						<br />
						Intestato a: Oratorio Natale del Signore - APS
					</p>
				</article>
			</section>

			<section className="content-section">
				<h3>Notizie recenti</h3>
				<div className="stack-cards">
					<article className="plain-card">
						<h4>Oratorio</h4>
						<p>L&apos;oratorio riparte sabato 18 ottobre alle ore 15:00.</p>
					</article>
					<article className="plain-card">
						<h4>Gruppo Ore Serene</h4>
						<p>Sono ripresi gli incontri il mercoledì pomeriggio alle 15:30.</p>
					</article>
					<article className="plain-card">
						<h4>Lectio Divina dell&apos;8 ottobre</h4>
						<p>
							Per la meditazione personale: <a href="Pdf/25-10-09lectiopdf.pdf">scarica il testo</a>.
						</p>
					</article>
					<article className="plain-card">
						<h4>Cultura Popolare Famiglia 2025-2026</h4>
						<p>
							Riprendono gli incontri settimanali di cultura religiosa, medicina, arte, musica e letteratura.
							Inizio: martedì 14-10. Iscrizione annuale: 15 euro (devoluta alle spese di riscaldamento della
							parrocchia).
						</p>
						<p>
							<a href="Pdf/programmaCPF.pdf">Vedi il programma completo</a>
						</p>
					</article>
				</div>
			</section>

			<section className="content-section">
				<div className="section-title-wrap">
					<h3>Festa Parrocchiale 3-4-5 ottobre 2025</h3>
					<p className="section-subtitle">La sconfitta della violenza e la vittoria della fede</p>
				</div>

				<blockquote className="quote-box">
					“Soccombe colui che non ha l&apos;animo retto, mentre il giusto vivrà per la sua fede.”
				</blockquote>

				<div className="timeline-cards">
					{festaProgramma.map((item) => (
						<article className="plain-card" key={item.giorno}>
							<h4>{item.giorno}</h4>
							<ul>
								{item.eventi.map((evento) => (
									<li key={evento}>{evento}</li>
								))}
							</ul>
						</article>
					))}
				</div>

				<div className="info-card accent-light">
					<p>
						Venerdì sera, dopo la Messa e l&apos;adorazione eucaristica, ci sarà un apericena condiviso: è possibile
						portare cibi salati, dolci e bevande da condividere.
					</p>
					<p>
						Iscrizioni pasti: <a href="http://tinyurl.com/iscrizionepastinds">tinyurl.com/iscrizionepastinds</a>
						<br />
						Iscrizioni tornei: <a href="http://tinyurl.com/iscrizionetorneinds">tinyurl.com/iscrizionetorneinds</a>
					</p>
				</div>

				<div className="grid-two">
					<img
						src={`${import.meta.env.BASE_URL}img/attivita/tornei2025.jpg`}
						alt="Locandina tornei 2025"
						className="content-image home-event-image"
					/>
					<img
						src={`${import.meta.env.BASE_URL}img/attivita/concerto2025.jpg`}
						alt="Locandina concerto 2025"
						className="content-image home-event-image"
					/>
					<img
						src={`${import.meta.env.BASE_URL}img/attivita/biciclettata2025.jpg`}
						alt="Locandina biciclettata 2025"
						className="content-image home-event-image"
					/>
					<img
						src={`${import.meta.env.BASE_URL}img/attivita/2025nonna papera.jpg`}
						alt="Locandina torneo Nonna Papera"
						className="content-image home-event-image"
					/>
				</div>
			</section>

			<section className="grid-two">
				<article className="info-card accent-green">
					<h3>Orari segreteria (sintesi)</h3>
					<ul>
						<li>Mercoledì e giovedì mattino: 10:00 - 12:00</li>
						<li>Giovedì pomeriggio: 18:30 - 19:30</li>
						<li>Venerdì pomeriggio: 17:00 - 19:00</li>
					</ul>
					<p>
						<a href="/nataledelsignore/orari">Vai a tutti gli orari</a>
					</p>
				</article>

				<article className="info-card accent-light">
					<h3>Prossimi appuntamenti</h3>
					<p>Ecco cosa c&apos;è in programma in questi giorni.</p>
					<div className="calendar-frame-wrap small">
						<iframe
							title="Calendario agenda rapida"
							src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=cGFycm9jY2hpYS5uYXRhbGVkZWxzaWdub3JlQGdtYWlsLmNvbQ&src=NTFyNDZpOTI1Nmg4dG1xYmxqYmRycXZrdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bnI4ZnBoc2YwY3FwN2M1OGlzOGdsY2YxZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aGVxa28wYzhvbGUzcmdlYzY0Y3FxZTE3amtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmtkNDY2aTBwcGw3amRydTA4Mm9zcTNhc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHNiNnBrZDNiYW00bmNobnE2MDdlNXFjaXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239762cc&color=%23F09300&color=%23F6BF26&color=%237CB342&color=%237aa300&color=%23D81B60&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
							width="100%"
							height="350"
							style={{ border: 0 }}
							loading="lazy"
						/>
					</div>
				</article>
			</section>
		</article>
	);
}

export default Home;
