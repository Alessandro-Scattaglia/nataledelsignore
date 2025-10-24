<script>
	import { base } from '$app/paths';
</script>

<footer class="footer">
	<div class="footer-container">
		<!-- Colonna sinistra: Logo -->
		<div class="footer-left">
			<img src="{base}/img/loghi/favicon.png" alt="Logo Parrocchia Natale del Signore" />
		</div>

		<!-- Colonna destra: Sezioni -->
		<div class="footer-right">
			<!-- Info Parrocchia -->
			<div class="footer-section">
				<h3>Parrocchia Natale del Signore</h3>
				<a
					href="https://www.google.com/maps?q=Via+Boston+37,+10137+Torino"
					target="_blank"
					rel="noopener noreferrer"
				>
					Via Boston 37, 10137 Torino
				</a>
				<p>Tel: <a href="tel:011352013">011.352013</a></p>
				<p>Email: <a href="mailto:parr.natale@diocesi.to.it">parr.natale@diocesi.to.it</a></p>
			</div>

			<!-- Altre Parrocchie -->
			<div class="footer-section">
				<h3>Le altre parrocchie dell'Unità Pastorale</h3>
				<ul>
					<li><a href="https://www.srita.it/">S. Rita</a></li>
					<li><a href="https://www.madonnarose.it/">Madonna delle Rose</a></li>
					<li>
						<a href="https://www.parrocchie.it/torino/mariamadredellachiesa/"
							>Maria Madre della Chiesa</a
						>
					</li>
					<li><a href="https://www.madremisericordia.it/">Maria Madre di Misericordia</a></li>
				</ul>
			</div>

			<!-- Social -->
			<div class="footer-section">
				<h3>Seguici sui social</h3>
				<div class="social-icons">
					<a
						href="https://www.facebook.com/parrocchianatale.delsignore"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="facebook"
					>
						<i class="fa-brands fa-facebook fa-2xl" style="color: #026798"></i>
					</a>
					<a
						href="https://www.instagram.com/parrocchiands/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="instagram"
					>
						<i class="fa-brands fa-instagram fa-2xl" style="color: #026798"></i>
					</a>
					<a
						href="https://wa.me/393401234567"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="whatsapp"
					>
						<i class="fa-brands fa-whatsapp fa-2xl" style="color: #026798;"></i>
					</a>
					<a
						href="https://www.youtube.com/channel/UCimGbVpSKU-d7X4eIvm0ZAw"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="whatsapp"
					>
						<i class="fa-brands fa-youtube fa-2xl" style="color: #026798;"></i>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="footer-bottom">
		&copy; {new Date().getFullYear()} Parrocchia Natale del Signore
	</div>
</footer>

<style>
	.footer {
		background-color: #cce7f0;
		padding: 3rem 1rem;
		color: #1a1a1a;
		font-family: sans-serif;
		width: 100%;
		margin: 0;
		border-radius: 0;
		box-sizing: border-box;
	}

	.footer-container {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.footer-left {
		flex: 1 1 200px;
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}

	.footer-left img {
		max-width: 100%;
		max-height: 150px;
	}

	.footer-right {
		flex: 3 1 800px;
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
	}

	.footer-section {
		flex: 1 1 250px;
	}

	.footer-section h3 {
		font-weight: bold;
		margin-bottom: 0.5rem;
		color: #026798;
	}

	.footer-section p,
	.footer-section ul,
	.footer-section a {
		margin: 0.3rem 0;
		color: #1a1a1a;
		text-decoration: none;
	}

	.footer-section ul {
		list-style: none;
		padding: 0;
	}

	.footer-section a:hover {
		text-decoration: underline;
		color: #026798;
	}

	.social-icons {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.social-icons i {
		font-size: 2.5rem;
		transition:
			transform 0.2s,
			color 0.2s;
	}

	.social-icons i:hover {
		transform: scale(1.2);
		color: #026798;
	}

	.footer-bottom {
		text-align: center;
		margin-top: 2rem;
		font-size: 0.9rem;
		color: #026798;
	}

	@media screen and (max-width: 768px) {
		.footer {
			text-align: center;
		}
		.social-icons {
			justify-content: center;
		}
	}
</style>
