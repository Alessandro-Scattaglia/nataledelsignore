import "./Footer.css";
import {
	BankIcon,
	FacebookIcon,
	LocationIcon,
	MailIcon,
	PhoneIcon,
	WhatsappIcon,
	YoutubeIcon,
} from "../Icons/ContactIcons";

function Footer() {
	return (
		<footer className="site-footer">
			<div className="footer-col footer-col-logo">
				<img
					src={`${import.meta.env.BASE_URL}img/logoNDS.png`}
					alt="Logo Parrocchia Natale del Signore"
					className="footer-logo"
				/>
				<p className="footer-logo-caption">Parrocchia Natale del Signore</p>
			</div>

			<div className="footer-col">
				<h3>Contatti rapidi</h3>
				<ul className="footer-list">
					<li>
						<LocationIcon className="footer-item-icon" />
						<a href="https://maps.google.com/?q=Via+Boston+37,+Torino" target="_blank" rel="noreferrer">
							Via Boston 37, 10137 Torino
						</a>
					</li>
					<li>
						<PhoneIcon className="footer-item-icon" />
						<a href="tel:+39011352013">011.352013</a>
					</li>
					<li>
						<MailIcon className="footer-item-icon" />
						<a href="mailto:parr.natale@diocesi.to.it">parr.natale@diocesi.to.it</a>
					</li>
					<li>
						<WhatsappIcon className="footer-item-icon" />
						<a href="http://bit.ly/CanaleNDS" target="_blank" rel="noreferrer">
							Canale WhatsApp
						</a>
					</li>
				</ul>
				<p className="footer-note">
					Per orari Messe e segreteria vai alla pagina <a href="/nataledelsignore/orari">Orari</a>.
				</p>
			</div>

			<div className="footer-col">
				<h3>Sostieni la comunità</h3>
				<ul className="footer-list footer-list-bank">
					<li>
						<BankIcon className="footer-item-icon" />
						<div>
							<p className="footer-list-title">Parrocchia Natale del Signore</p>
							<p>IBAN: IT88Q0623001137000046359622</p>
						</div>
					</li>
					<li>
						<BankIcon className="footer-item-icon" />
						<div>
							<p className="footer-list-title">Oratorio Natale del Signore - APS</p>
							<p>IBAN: IT71T0304801004000000085432</p>
						</div>
					</li>
				</ul>
				<p className="footer-note">Causale consigliata: Offerta, Carita, Attivita oratorio.</p>
			</div>

			<div className="footer-col footer-col-social">
				<h3>Seguici e collabora</h3>
				<div className="footer-social-links">
					<a
						className="social-chip"
						href="http://www.facebook.com/parrocchianatale.delsignore"
						target="_blank"
						rel="noreferrer"
						aria-label="Pagina Facebook Parrocchia Natale del Signore"
					>
						<FacebookIcon className="social-chip-icon" />
						Facebook
					</a>
					<a
						className="social-chip"
						href="http://www.youtube.com/channel/UCimGbVpSKU-d7X4eIvm0ZAw"
						target="_blank"
						rel="noreferrer"
						aria-label="Canale YouTube Parrocchia Natale del Signore"
					>
						<YoutubeIcon className="social-chip-icon" />
						YouTube
					</a>
				</div>

				<h3 className="footer-subheading">Unita Pastorale</h3>
				<ul className="footer-links-inline">
					<li>
						<a href="http://www.srita.it/" target="_blank" rel="noreferrer">
							S. Rita
						</a>
					</li>
					<li>
						<a href="http://www.madonnadellerose.it" target="_blank" rel="noreferrer">
							Madonna delle Rose
						</a>
					</li>
					<li>
						<a href="http://www.parrocchie.it/torino/mariamadredellachiesa/" target="_blank" rel="noreferrer">
							Maria Madre della Chiesa
						</a>
					</li>
					<li>
						<a href="http://www.madremisericordia.it" target="_blank" rel="noreferrer">
							Maria Madre di Misericordia
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
