<script>
  	import { base } from '$app/paths';
</script>


<!-- src/lib/components/Footer.svelte -->
<footer class="footer">
  <div class="footer-container">

    <!-- Info Parrocchia -->
    <div class="footer-section">
      <h3>Parrocchia Natale del Signore</h3>
      <p>Via Boston 37, 10137 Torino</p>
      <p>Tel: <a href="tel:011352013">011.352013</a></p>
      <p>Email: <a href="mailto:parr.natale@diocesi.to.it">parr.natale@diocesi.to.it</a></p>
    </div>

    <!-- Altre Parrocchie -->
    <div class="footer-section">
      <h3>Le altre parrocchie dell'Unità Pastorale</h3>
      <ul>
        <li><a href="https://www.srita.it/">S. Rita</a></li>
        <li><a href="https://www.madonnarose.it/">Madonna delle Rose</a></li>
        <li><a href="https://www.parrocchie.it/torino/mariamadredellachiesa/">Maria Madre della Chiesa</a></li>
        <li><a href="https://www.madremisericordia.it/">Maria Madre di Misericordia</a></li>
      </ul>
    </div>

    <!-- Social -->
    <div class="footer-section">
      <h3>Seguici sui social</h3>
      <div class="social-icons">
        <a href="https://www.facebook.com/parrocchianatale.delsignore" target="_blank" rel="noopener noreferrer">
          <img src="{base}/social/Fb-logo.png" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/parrocchiands/" target="_blank" rel="noopener noreferrer">
          <img src="{base}/social/IG-logo.png" alt="Instagram">
        </a>
      
        <!-- altri social -->
      </div>
    </div>

  </div>

  <div class="footer-bottom">
    &copy; {new Date().getFullYear()} Parrocchia Natale del Signore
  </div>
</footer>

<style>
.footer {
  background-color: #cce7f0; /* azzurro chiaro */
  padding: 3rem 1rem;
  color: #1a1a1a;
  font-family: sans-serif;
}

.footer-container {
  max-width: 1000px;
  margin: 0 auto;
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
  color: #007c91; /* un azzurro più scuro per i titoli */
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
  color: #005f6b;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.social-icons img {
  width: 30px;
  height: 30px;
  transition: transform 0.2s;
}

.social-icons img:hover {
  transform: scale(1.2);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #004850; /* colore del testo leggermente più scuro */
}
</style>
