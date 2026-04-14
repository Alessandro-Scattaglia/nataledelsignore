function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-col footer-col-logo" aria-hidden="true">
        <div className="logo-placeholder">Logo</div>
      </div>

      <div className="footer-col">
        <h3>Parrocchia Natale del Signore</h3>
        <p>Via Boston 37, 10137 Torino</p>
        <p>Tel. 011.352013</p>
        <p>
          Email: <a href="mailto:parr.natale@diocesi.to.it">parr.natale@diocesi.to.it</a>
        </p>
      </div>

      <div className="footer-col">
        <h3>Unità Pastorale</h3>
        <p>
          <a href="http://www.srita.it/" target="_blank" rel="noreferrer">
            S. Rita
          </a>
        </p>
        <p>
          <a href="http://www.madonnadellerose.it" target="_blank" rel="noreferrer">
            Madonna delle Rose
          </a>
        </p>
        <p>
          <a href="http://www.parrocchie.it/torino/mariamadredellachiesa/" target="_blank" rel="noreferrer">
            Maria Madre della Chiesa
          </a>
        </p>
        <p>
          <a href="http://www.madremisericordia.it" target="_blank" rel="noreferrer">
            Maria Madre di Misericordia
          </a>
        </p>
      </div>

      <div className="footer-col footer-col-social">
        <h3>Seguici</h3>
        <a
          className="facebook-link"
          href="http://www.facebook.com/parrocchianatale.delsignore"
          target="_blank"
          rel="noreferrer"
          aria-label="Pagina Facebook Parrocchia Natale del Signore"
        >
          <span className="fb-icon" aria-hidden="true">
            f
          </span>
          Facebook
        </a>
      </div>
    </footer>
  );
}

export default Footer;
