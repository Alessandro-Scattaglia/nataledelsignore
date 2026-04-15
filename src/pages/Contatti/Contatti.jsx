import "./Contatti.css";

function Contatti() {
	return (
		<article className="page page-contatti">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Contatti</p>
					<h2>Resta in contatto con la parrocchia</h2>
					<p>Canali utili per comunicazioni, attività pastorali, iniziative sociali e sostegno alla comunità.</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/nataledelsignore.jpg`}
					alt="Facciata parrocchia"
					className="content-image contatti-hero-image"
				/>
			</header>

			<section className="grid-two">
				<article className="info-card accent-secondary">
					<h3>Contatti principali</h3>
					<p>
						<strong>Parrocchia Natale del Signore</strong>
						<br />
						Via Boston 37, 10137 Torino
						<br />
						Tel. 011.352013
						<br />
						Email: <a href="mailto:parr.natale@diocesi.to.it">parr.natale@diocesi.to.it</a>
					</p>
				</article>

				<article className="info-card accent-gold">
					<h3>Email dei servizi</h3>
					<ul>
						<li>
							Oratorio: <a href="mailto:parrocchia.nataledelsignore@gmail.com">parrocchia.nataledelsignore@gmail.com</a>
						</li>
						<li>
							Aiuto alimenti: <a href="mailto:aiutoalimenti.nataledelsignore@gmail.com">aiutoalimenti.nataledelsignore@gmail.com</a>
						</li>
						<li>
							Sportello lavoro: <a href="mailto:serviziolavoro.nataledelsignore@gmail.com">serviziolavoro.nataledelsignore@gmail.com</a>
						</li>
						<li>
							San Vincenzo: <a href="mailto:sanvincenzo.nataledelsignore@gmail.com">sanvincenzo.nataledelsignore@gmail.com</a>
						</li>
					</ul>
				</article>
			</section>

			<section className="grid-two">
				<article className="info-card accent-light">
					<h3>I nostri media</h3>
					<ul>
						<li>Facebook: parrocchia.nataledelsignore</li>
						<li>YouTube: @parrocchianataledelsignore8214</li>
						<li>X-Twitter: @ParrocchiaNdS</li>
						<li>Instagram: @ParrocchiaNdS</li>
						<li>WhatsApp: CanaleNdS</li>
					</ul>
				</article>

				<article className="info-card accent-red">
					<h3>Riferimenti bancari</h3>
					<p>
						<strong>Parrocchia Natale del Signore</strong>
						<br />
						IBAN: IT88Q0623001137000046359622
						<br />
						Credit Agricole
					</p>
					<p>
						<strong>Oratorio Natale del Signore - APS</strong>
						<br />
						IBAN: IT71T0304801004000000085432
						<br />
						Banca del Piemonte
					</p>
					<p>
						<strong>ODV Società di S. Vincenzo de&apos; Paoli - Consiglio centrale Torino</strong>
						<br />
						IBAN: IT29F0623030653000047220822
						<br />
						Credit Agricole
					</p>
				</article>
			</section>

			<section className="content-section">
				<h3>Mappa</h3>
				<div className="calendar-frame-wrap">
					<iframe
						title="Mappa contatti parrocchia"
						width="100%"
						height="420"
						style={{ border: 0 }}
						loading="lazy"
						allowFullScreen
						src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBZUYiKBMf1tZ-3WfP0DEzi0V-zJEsCZyw&q=Parrocchia+Natale+del+Signore,Torino+Italia&maptype=satellite&zoom=19"
					/>
				</div>
			</section>
		</article>
	);
}

export default Contatti;
