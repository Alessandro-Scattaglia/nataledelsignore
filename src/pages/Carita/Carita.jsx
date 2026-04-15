import "./Carita.css";

function Carita() {
	return (
		<article className="page page-carita">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Servizio e vicinanza</p>
					<h2>Carità e sostegno alle persone fragili</h2>
					<p>
						La comunità promuove iniziative continuative di ascolto, accompagnamento, accoglienza e aiuto concreto.
					</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/carita.jpg`}
					alt="Iniziative di carità"
					className="content-image carita-hero-image"
				/>
			</header>

			<section className="grid-two">
				<article className="info-card accent-secondary">
					<h3>San Vincenzo</h3>
					<p>Segue famiglie e persone in difficoltà, anche economica.</p>
					<p>
						Contatto: <a href="mailto:sanvincenzo.nataledelsignore@gmail.com">sanvincenzo.nataledelsignore@gmail.com</a>
						<br />
						Donazioni IBAN: <strong>IT29F0623030653000047220822</strong>
					</p>
				</article>

				<article className="info-card accent-gold">
					<h3>Servizio Sportello Lavoro</h3>
					<p>
						Accompagna giovani e adulti nella ricerca di lavoro.
						<br />
						Apertura: primo e terzo giovedì di ogni mese, 17:00 - 18:00.
					</p>
					<p>
						Info: <a href="Pdf/001 volantino presentazione.pdf">volantino presentazione</a>
						<br />
						Email: <a href="mailto:serviziolavoro.nataledelsignore@gmail.com">serviziolavoro.nataledelsignore@gmail.com</a>
					</p>
				</article>
			</section>

			<section className="content-section">
				<h3>Accoglienza Migranti</h3>
				<article className="plain-card">
					<p>
						Dal 2016, accogliendo l&apos;invito di Papa Francesco e del vescovo Nosiglia, la parrocchia ha avviato
						un progetto di ospitalità per giovani immigrati, accompagnandoli nel percorso di integrazione e
						autonomia.
					</p>
					<p>
						In questi anni la comunità ha accolto otto giovani tra i 24 e i 32 anni: Munir (Kashmir), Adamu e
						Francis (Ghana), Adamà e Mory (Costa d&apos;Avorio), Sunny (Nigeria), Abdullhai (Somalia) e Usama
						(Pakistan).
					</p>
					<p>
						Cinque di loro sono diventati autonomi, con casa e lavoro. Gli altri hanno continuato il loro
						percorso tra formazione professionale e ricerca occupazionale.
					</p>
					<p>
						Il progetto ha mostrato come l&apos;accoglienza, soprattutto verso chi è diverso da noi, possa diventare
						una ricchezza reciproca: amicizia, gratitudine e relazioni vere.
					</p>
					<p className="note-right">Testimonianza comunitaria - 19 dicembre 2021</p>
				</article>
			</section>

			<section className="content-section">
				<h3>Vicinanza alle famiglie in difficoltà (periodo emergenza sanitaria)</h3>
				<article className="plain-card">
					<p>
						Durante l&apos;emergenza Covid, volontari della comunità hanno affiancato il servizio San Vincenzo,
						organizzando spesa, preparazione e consegna di borse alimentari a domicilio.
					</p>
					<p>
						Grazie alla collaborazione con il supermercato In&apos;s di via Bainsizza, è stata attivata una "spesa
						sospesa" che ha integrato le donazioni raccolte nelle ceste permanenti in fondo alla chiesa.
					</p>
					<p>
						Con cadenza quindicinale, circa 60 famiglie venivano contattate per valutare bisogni specifici
						(bollette, affitti, utenze, generi alimentari) e ricevere sostegno.
					</p>
					<p>
						Pur con le limitazioni relazionali del periodo, la comunità ha rafforzato la consapevolezza del
						servizio verso i più fragili: tempo, denaro, viveri, ascolto e preghiera.
					</p>
					<p className="note-right">Comunicazione comunitaria - 12 dicembre 2021</p>
				</article>
			</section>

			<section className="grid-two">
				<img
					src={`${import.meta.env.BASE_URL}img/attivita/2025-01-22-solidarietà.jpg`}
					alt="Foto iniziativa solidarietà 2025"
					className="content-image carita-gallery-image"
				/>
				<img
					src={`${import.meta.env.BASE_URL}img/attivita/2024-05-solidarietà.jpg`}
					alt="Foto iniziativa solidarietà 2024"
					className="content-image carita-gallery-image"
				/>
			</section>
		</article>
	);
}

export default Carita;
