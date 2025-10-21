<script>
	import { base } from '$app/paths';
	let mobileMenuOpen = false;
</script>

<nav id="navbar">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="nav-container">
		<div class="logo">
			<a href="{base}/">
				<img src="{base}/img/loghi/logo_sito_acquerello_per_blog_5.gif" alt="Logo" />
			</a>
		</div>

		<!-- Hamburger per mobile -->
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div class="hamburger" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>

		<ul class="nav-links {mobileMenuOpen ? 'open' : ''}">
			<li><a href="{base}/">Home</a></li>

			<li class="dropdown">
				<a href="{base}/chi-siamo">Chi Siamo</a>
				<ul class="submenu">
					<li><a href="{base}/chi-siamo/storia">Storia della parrocchia</a></li>
					<li><a href="{base}/chi-siamo/collaboratori">I nostri collaboratori</a></li>
					<li><a href="{base}/chi-siamo/preti">I nostri preti</a></li>
				</ul>
			</li>

			<li class="dropdown">
				<a href="{base}/vita-parrocchiale">Vita parrocchiale</a>
				<ul class="submenu">
					<li><a href="{base}/vita-parrocchiale/liturgia">Liturgia</a></li>
					<li><a href="{base}/vita-parrocchiale/gruppi">Gruppi</a></li>
					<li><a href="{base}/vita-parrocchiale/catechismo">Catechismo</a></li>
				</ul>
			</li>

			<li class="dropdown">
				<a href="{base}/attivita">Attività & comunità</a>
				<ul class="submenu">
					<li><a href="{base}/attivita/oratorio">Oratorio & giovani</a></li>
					<li><a href="{base}/attivita/carita">Carità & servizi</a></li>
					<li><a href="{base}/attivita/eventi">Eventi</a></li>
				</ul>
			</li>

			<li>
				<a href="{base}/orari-contatti">Orari & contatti</a>
			  </li>
			  

			  <li>
				<a href="{base}/news">News / Avvisi</a>
			</li>
			

			<li class="dropdown">
				<a href="{base}/donazioni">Donazioni / Sostienici</a>
				<ul class="submenu">
					<li><a href="{base}/donazioni/come-donare">Come donare</a></li>
					<li><a href="{base}/donazioni/progetti-attuali">Progetti attuali</a></li>
				</ul>
			</li>
		</ul>
	</div>
</nav>

<style>
	#navbar {
		position: sticky;
		top: 0;
		width: 100%;
		background-color: #cce7f0;
		color: #1a1a1a;
		font-family: sans-serif;
		border-radius: 20px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0.75rem 1rem;
	}

	/* Logo */
	.logo img {
		height: 55px;
		transition: transform 0.3s ease;
	}
	.logo img:hover {
		transform: scale(1.05);
	}

	/* Link principali */
	.nav-links {
		list-style: none;
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: #007c91; /* più contrastato */
		font-weight: 700; /* BOLD di base */
		position: relative;
		transition: color 0.3s ease;
	}

	/* Effetto underline azzurro */
	.nav-links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -3px;
		height: 2px;
		width: 0;
		background-color: #007c91;
		transition: width 0.3s ease;
	}

	.nav-links a:hover {
		color: #007c91;
	}
	.nav-links a:hover::after {
		width: 100%;
	}

	/* Dropdown */
	.dropdown {
		position: relative;
	}
	.submenu {
		position: absolute;
		top: 125%;
		left: 0;
		background: #e6f3f7;
		list-style: none;
		padding: 0.5rem 0;
		margin: 0;
		min-width: 200px;
		border-radius: 10px;
		box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
		opacity: 0;
		transform: translateY(-10px);
		pointer-events: none;
		transition: all 0.5s ease;
	}

	.submenu::before {
		content: '';
		position: absolute;
		top: -20px;
		left: 0;
		width: 100%;
		height: 20px;
		background: transparent;
	}

	.dropdown:hover .submenu {
		opacity: 1;
		transform: translateY(0);
		pointer-events: auto;
	}
	.submenu li a {
		display: block;
		padding: 0.5rem 1rem;
	}
	.submenu li a:hover {
		background: #cce7f0;
		color: #007c91;
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		gap: 5px;
		cursor: pointer;
	}
	.hamburger .line {
		width: 25px;
		height: 3px;
		background: #1a1a1a;
		border-radius: 2px;
	}

	/* Mobile */
	@media screen and (max-width: 768px) {
		.hamburger {
			display: flex;
		}
		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: #cce7f0;
			flex-direction: column;
			align-items: center;
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s ease;
		}
		.nav-links.open {
			max-height: 1000px;
		}
		.nav-links li {
			margin: 0.5rem 0;
		}
		.dropdown .submenu {
			position: static;
			box-shadow: none;
			background: #e6f3f7;
			opacity: 1;
			transform: translateY(0);
			pointer-events: auto;
			border-radius: 0;
		}
	}
</style>
