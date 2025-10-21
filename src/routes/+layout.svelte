<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
  </script>
  
  <Navbar />
  
  <main class="page-content">
	<slot />   <!-- qui viene inserito il contenuto di ogni pagina -->
  </main>
  
  <Footer />
  
  <style>
  .page-content {
	padding: 2rem;
	min-height: 80vh;
  }
  </style>
  