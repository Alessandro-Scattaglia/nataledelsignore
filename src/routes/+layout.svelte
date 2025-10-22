<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href="{base}/img/loghi/favicon.png" />
</svelte:head>

<Navbar />

<main class="page-content">
	<slot />
</main>

<Footer />

<style>
	.page-content {
		padding: 2rem;
		min-height: 80vh;
	}
  :global(html, body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
    }

    :global(*), :global(*::before), :global(*::after) {
        box-sizing: inherit;
    }
</style>
