<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let mobileMenuOpen = false;
	let openDropdown = null;
	let isMobile = false;

	function toggleDropdown(name) {
		openDropdown = openDropdown === name ? null : name;
	}

	function handleMouseEnter(name) {
		if (!isMobile) {
			openDropdown = name;
		}
	}

	function handleMouseLeave(name) {
		if (!isMobile && openDropdown === name) {
			openDropdown = null;
		}
	}

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<nav id="navbar">
	<div class="nav-container">
		<div class="logo">
			<a href="{base}/">
				<img src="{base}/img/loghi/favicon.png" alt="Logo" />
			</a>
		</div>

		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<div class="hamburger" on:click={() => (mobileMenuOpen = !mobileMenuOpen)}>
			<div class="line"></div>
			<div class="line"></div>
			<div class="line"></div>
		</div>

		<ul class="nav-links {mobileMenuOpen ? 'open' : ''}">
			<li><a href="{base}/">Home</a></li>

			<li
				class="dropdown"
				on:mouseenter={() => handleMouseEnter('chi-siamo')}
				on:mouseleave={() => handleMouseLeave('chi-siamo')}
			>
				<button
					class="dropdown-button {openDropdown === 'chi-siamo' ? 'active' : ''}"
					on:click|preventDefault={() => toggleDropdown('chi-siamo')}
				>
					<span>Chi Siamo</span>
					<div class="arrow {openDropdown === 'chi-siamo' ? 'rotated' : ''}">
						<i class="fa-solid fa-chevron-down" style="color: #026798;"></i>
					</div>
				</button>
				{#if openDropdown === 'chi-siamo'}
					<ul class="submenu">
						<li><a href="{base}/chi-siamo/storia">Storia della parrocchia</a></li>
						<li><a href="{base}/chi-siamo/collaboratori">I nostri collaboratori</a></li>
						<li><a href="{base}/chi-siamo/preti">I nostri preti</a></li>
					</ul>
				{/if}
			</li>

			<li
				class="dropdown"
				on:mouseenter={() => handleMouseEnter('vita-parrocchiale')}
				on:mouseleave={() => handleMouseLeave('vita-parrocchiale')}
			>
				<button
					class="dropdown-button {openDropdown === 'vita-parrocchiale' ? 'active' : ''}"
					on:click|preventDefault={() => toggleDropdown('vita-parrocchiale')}
				>
					<span>Vita parrocchiale</span>
					<div class="arrow {openDropdown === 'vita-parrocchiale' ? 'rotated' : ''}">
						<i class="fa-solid fa-chevron-down" style="color: #026798;"></i>
					</div>
				</button>
				{#if openDropdown === 'vita-parrocchiale'}
					<ul class="submenu">
						<li><a href="{base}/vita-parrocchiale/liturgia">Liturgia</a></li>
						<li><a href="{base}/vita-parrocchiale/gruppi">Gruppi</a></li>
						<li><a href="{base}/vita-parrocchiale/catechismo">Catechismo</a></li>
					</ul>
				{/if}
			</li>

			<li
				class="dropdown"
				on:mouseenter={() => handleMouseEnter('attivita')}
				on:mouseleave={() => handleMouseLeave('attivita')}
			>
				<button
					class="dropdown-button {openDropdown === 'attivita' ? 'active' : ''}"
					on:click|preventDefault={() => toggleDropdown('attivita')}
				>
					<span>Attività & comunità</span>
					<div class="arrow {openDropdown === 'attivita' ? 'rotated' : ''}">
						<i class="fa-solid fa-chevron-down" style="color: #026798;"></i>
					</div>
				</button>
				{#if openDropdown === 'attivita'}
					<ul class="submenu">
						<li><a href="{base}/attivita/oratorio">Oratorio & giovani</a></li>
						<li><a href="{base}/attivita/carita">Carità & servizi</a></li>
						<li><a href="{base}/attivita/eventi">Eventi</a></li>
					</ul>
				{/if}
			</li>

			<li><a href="{base}/orari-contatti">Orari & contatti</a></li>
			<li><a href="{base}/news">News / Avvisi</a></li>

			<li
				class="dropdown"
				on:mouseenter={() => handleMouseEnter('donazioni')}
				on:mouseleave={() => handleMouseLeave('donazioni')}
			>
				<button
					class="dropdown-button {openDropdown === 'donazioni' ? 'active' : ''}"
					on:click|preventDefault={() => toggleDropdown('donazioni')}
				>
					<span>Donazioni / Sostienici</span>
					<div class="arrow {openDropdown === 'donazioni' ? 'rotated' : ''}">
						<i class="fa-solid fa-chevron-down" style="color: #026798;"></i>
					</div>
				</button>
				{#if openDropdown === 'donazioni'}
					<ul class="submenu">
						<li><a href="{base}/donazioni/come-donare">Come donare</a></li>
						<li><a href="{base}/donazioni/progetti-attuali">Progetti attuali</a></li>
					</ul>
				{/if}
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
		border-radius: 0;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		margin: 0;
		box-sizing: border-box;
	}

	.nav-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0.75rem 1rem;
	}

	.logo img {
		height: 55px;
		transition: transform 0.3s ease;
	}
	.logo img:hover {
		transform: scale(1.05);
	}

	.nav-links {
		list-style: none;
		display: flex;
		gap: 1.5rem;
		align-items: center;
	}

	.nav-links a {
		text-decoration: none;
		color: #026798;
		font-weight: 700;
		position: relative;
		transition: color 0.3s ease;
	}
	.nav-links a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -3px;
		height: 2px;
		width: 0;
		background-color: #026798;
		transition: width 0.3s ease;
	}
	.nav-links a:hover {
		color: #026798;
	}
	.nav-links a:hover::after {
		width: 100%;
	}

	/* Stili per i pulsanti dropdown */
	.dropdown-button {
		background: none;
		border: none;
		color: #026798;
		font-weight: 700;
		font-size: inherit;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 0.3rem;
		padding: 0;
		position: relative;
		transition: color 0.3s ease;
	}
	.dropdown-button::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -3px;
		height: 2px;
		width: 0;
		background-color: #026798;
		transition: width 0.3s ease;
	}
	.dropdown-button:hover::after {
		width: 100%;
	}

	.arrow {
		font-size: 0.7rem;
		transition: transform 0.3s ease;
		margin-top: 2px;
	}

	.arrow.rotated {
		transform: rotate(180deg);
	}

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
		z-index: 999;
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
	.submenu li a {
		display: block;
		padding: 0.5rem 1rem;
	}
	.submenu li a:hover {
		background: #cce7f0;
		color: #026798;
	}

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

	@media screen and (max-width: 768px) {
		.nav-container {
			padding: 0.75rem 0.5rem;
		}

		.hamburger {
			display: flex;
			flex-direction: column;
			gap: 5px;
			cursor: pointer;
			margin-left: auto;
			margin-right: 0.5rem;
		}

		.hamburger .line {
			width: 25px;
			height: 3px;
			background: #1a1a1a;
			border-radius: 2px;
		}

		/* Menu principale mobile */
		.nav-links {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: #cce7f0;
			flex-direction: column;
			align-items: center;
			text-align: center;
			max-height: 0;
			overflow: hidden;
			transition: max-height 0.3s ease;
			border-radius: 20px;
			padding: 0 1rem;
		}

		.nav-links.open {
			max-height: 1000px;
		}

		.nav-links li {
			margin: 0.5rem 0;
			width: 100%;
		}

		.nav-links li a,
		.nav-links li .dropdown-button {
			display: block;
			width: 90%;
			margin: 0 auto;
			text-align: center;
			justify-content: center;
		}

		/* Sottomenu */
		.dropdown .submenu {
			position: static;
			background: #e6f3f7;
			border-radius: 20px;
			box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
			width: 90%;
			margin: 0 auto;
			text-align: center;
		}

		.submenu li {
			width: 100%;
		}

		.submenu li a {
			display: block;
			padding: 0.5rem 1rem;
			text-align: center;
		}

		/* Disattiva underline animato */
		.nav-links a::after,
		.dropdown-button::after {
			display: none;
		}

		/* Freccia nel mobile */
		.arrow {
			display: inline-block;
		}
	}
</style>
