import "./LaChiesa.css";

function LaChiesa() {
	return (
		<article className="page page-lachiesa">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Visita della chiesa</p>
					<h2>La chiesa Natale del Signore</h2>
					<p>
						Nel quartiere Santa Rita, tra i grandi insediamenti degli anni Settanta, la chiesa dedicata al Mistero
						della Natività è stata consacrata il 24 dicembre 1974 dal cardinale Michele Pellegrino.
					</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/nataledelsignore.jpg`}
					alt="Esterno chiesa"
					className="content-image lachiesa-hero-image"
				/>
			</header>

			<section className="content-section">
				<article className="plain-card">
					<h3>Origini e architettura</h3>
					<p>
						Il progetto è dell&apos;architetto A. Campagnoli, su indicazione della comunità nascente guidata da don
						Michele Bechis. La costruzione si è sviluppata in tre anni e si è conclusa durante il ministero di don
						Sebastiano Galletto.
					</p>
					<p>
						La chiesa è sopraelevata rispetto al piano stradale, raggiungibile con una rampa di scale che conduce
						a un ampio atrio coperto. Sul lato destro dell&apos;atrio, cinque porte in vetro introducono a un interno a
						pianta quadrata con soffitto a cassettoni in cemento armato, in parte vetrati per luce e aerazione.
					</p>
					<p>
						L&apos;insieme è volutamente lineare, austero e sobrio, con pavimentazione in gres porcellanato marrone.
					</p>
				</article>
			</section>

			<section className="grid-two">
				<article className="info-card accent-secondary">
					<h3>Altare e Natività</h3>
					<p>
						Al centro della parete di fondo, su predella in legno naturale, si trova l&apos;altare con una Natività di
						Mario Caffaro Rore (1910-2001), dono di don Sebastiano Galletto.
					</p>
					<p>
						L&apos;altare in marmo, con Gesù e i dodici apostoli, è stato donato nel 2008 dai Fratelli delle Scuole
						Cristiane dell&apos;Istituto La Salle di Torino insieme ai banchi per i fedeli.
					</p>
					<img
						src={`${import.meta.env.BASE_URL}img/DSC2144.jpg`}
						alt="Altare e Natività"
						className="content-image lachiesa-detail-image"
					/>
				</article>

				<article className="info-card accent-light">
					<h3>Tabernacolo e area presbiteriale</h3>
					<p>
						Alla destra dell&apos;altare si trova il tabernacolo su piedistallo con vetrata raffigurante Santa Chiara;
						alla sinistra dell&apos;altare è collocato l&apos;organo.
					</p>
					<img
						src={`${import.meta.env.BASE_URL}img/tabernacolo.jpg`}
						alt="Tabernacolo"
						className="content-image lachiesa-detail-image"
					/>
				</article>
			</section>

			<section className="timeline-cards">
				<article className="plain-card">
					<h4>Fonte battesimale</h4>
					<p>
						Sopra il fonte battesimale è collocato un dipinto della Natività di Enrico Gamba (1831-1883),
						donato dal Monastero delle Clarisse Cappuccine di San Vito.
					</p>
				</article>

				<article className="plain-card">
					<h4>San Biagio e Crocifisso</h4>
					<p>
						Sulla parete sinistra, accanto all&apos;altare, è presente un quadro della Confraternita dei materassai
						dedicato a San Biagio. Sulla parete opposta all&apos;altare si trova il Crocifisso ispirato a Cimabue,
						donato dalla pittrice Gloria Giannetto.
					</p>
				</article>

				<article className="plain-card">
					<h4>Via Crucis</h4>
					<p>
						Sulla parete destra della chiesa, 14 quadri donati dall&apos;artista Pierangelo Devecchi illustrano le
						stazioni della Via Crucis.
					</p>
				</article>

				<article className="plain-card">
					<h4>Cappella della Consolata</h4>
					<p>
						In corrispondenza dell&apos;atrio esterno si trova l&apos;ampia cappella dedicata alla Consolata. Davanti alla
						cappella è presente la zona penitenziale con confessionali e una statua lignea della Madonna, opera
						dello scultore Guido Moroder di Ortisei.
					</p>
				</article>
			</section>
		</article>
	);
}

export default LaChiesa;
