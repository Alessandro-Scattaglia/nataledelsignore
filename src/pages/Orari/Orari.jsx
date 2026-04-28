import "./Orari.css";

function Orari() {
  return (
    <article className="page page-orari">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Orari e servizi</p>
          <h2>Orari delle Messe e della segreteria</h2>
          <p>
            La chiesa è aperta tutti i giorni dalle 8:00 alle 12:00 e dalle
            16:00 alle 19:00, tranne il lunedì pomeriggio.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}img/nataledelsignore.jpg`}
          alt="Foto ingresso chiesa"
          className="content-image orari-hero-image"
        />
      </header>

      <section className="grid-two">
        <article className="info-card accent-secondary">
          <h3>Messe festive</h3>
          <ul>
            <li>Sabato: ore 18:00</li>
            <li>Domenica: ore 9:00</li>
            <li>Domenica: ore 11:00</li>
            <li>Domenica: ore 18:00</li>
          </ul>
        </article>

        <article className="info-card accent-green">
          <h3>Messe feriali</h3>
          <ul>
            <li>Martedì, giovedì e venerdì: ore 18:00</li>
            <li>Mercoledì: ore 8:30</li>
          </ul>
        </article>
      </section>

      <section className="content-section">
        <article className="info-card accent-light">
          <h3>Ricordo dei fedeli defunti</h3>
          <p>
            Per ricordare un defunto in una Messa basta passare in sacrestia
            qualche minuto prima della celebrazione e segnalare il nome al
            celebrante o all&apos;incaricato presente.
          </p>
          <p>Non vengono segnati nomi di defunti per telefono.</p>
        </article>
      </section>

      <section className="grid-two">
        <article className="info-card accent-gold">
          <h3>Segreteria parrocchiale</h3>
          <ul>
            <li>Mercoledì e giovedì mattino: 10:00 - 12:00</li>
            <li>Giovedì pomeriggio: 18:30 - 19:30</li>
            <li>Venerdì pomeriggio: 17:00 - 19:00</li>
          </ul>
        </article>

        <article className="info-card accent-red">
          <h3>Sportello Lavoro</h3>
          <p>Primo e terzo giovedì di ogni mese: 17:00 - 18:00</p>
        </article>
      </section>

      <section className="content-section">
        <h3>Dove siamo</h3>
        <div className="calendar-frame-wrap">
          <iframe
            title="Mappa Parrocchia Natale del Signore"
            width="100%"
            height="420"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps?q=Parrocchia+Natale+del+Signore+Torino&output=embed"
          />
        </div>
      </section>

      <section className="content-section">
        <article className="plain-card">
          <h4>Contatti diretti</h4>
          <p>
            Parrocchia Natale del Signore
            <br />
            Via Boston 37, 10137 Torino
            <br />
            Tel. 011.352013
            <br />
            Email:{" "}
            <a href="mailto:parr.natale@diocesi.to.it">
              parr.natale@diocesi.to.it
            </a>
          </p>
        </article>
      </section>
    </article>
  );
}

export default Orari;
