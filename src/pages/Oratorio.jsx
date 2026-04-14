import ImagePlaceholder from "../components/ImagePlaceholder";

function Oratorio() {
  return (
    <article className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Bambini e ragazzi</p>
          <h2>Oratorio Natale del Signore</h2>
          <p>
            L&apos;oratorio è aperto per i ragazzi dalla 1ª elementare alla 2ª media: un tempo di gioco, amicizia,
            animazione e crescita nel cammino di fede.
          </p>
        </div>
        {/* TODO: sostituire con img/oratorionds.jpg */}
        <ImagePlaceholder label="Oratorio Natale del Signore" height={230} />
      </header>

      <section className="grid-two">
        <article className="info-card accent-green">
          <h3>Oratorio del sabato</h3>
          <p>
            Per bambini e ragazzi dalla 1ª elementare alla 2ª media:
            <br />
            <strong>tutti i sabati dalle 15:00 alle 18:00</strong>.
          </p>
          <p>Animatori giovani, giochi e attività insieme.</p>
        </article>

        <article className="info-card accent-secondary">
          <h3>Segreteria oratorio</h3>
          <p>
            Apertura ogni mercoledì:
            <br />
            <strong>17:30 - 19:00</strong>
          </p>
          <p>Informazioni, tesseramento e supporto compilazione moduli.</p>
        </article>
      </section>

      <section className="content-section">
        <article className="info-card accent-red">
          <h3>Modulistica</h3>
          <p>Per partecipare alle attività di catechismo e oratorio è necessario compilare:</p>
          <ul>
            <li>
              <a href="att/01_schedasanitaria.pdf">Scheda sanitaria</a>
            </li>
            <li>
              <a href="att/02_patto_responsabilita-reciproca.pdf">Patto di responsabilità reciproca</a>
            </li>
            <li>
              <a href="att/03_informativa_covid-19_2021.pdf">Informativa trattamento dati (periodo emergenza)</a>
            </li>
          </ul>
        </article>
      </section>

      <section className="content-section">
        <h3>Estate Ragazzi (riferimento storico)</h3>
        <article className="plain-card">
          <p>
            Proposta estiva organizzata in moduli settimanali per elementari e medie, con attività giornaliere,
            pranzo al sacco e accompagnamento educativo degli animatori.
          </p>
          <p>
            Nel formato storico 2020 erano previste 3 settimane (29 giugno - 17 luglio), tesseramento da 10 euro
            e quota settimanale da 30 euro, con proposta Extreme Summer per 3ª media e 1ª superiore.
          </p>
        </article>
      </section>

      <section className="content-section">
        {/* TODO: sostituire con img/oratorio/2025-10-15.jpg */}
        <ImagePlaceholder label="Locandina Oratorio 2025" height={280} />
      </section>

      <section className="content-section">
        <h3>Prossimi appuntamenti del catechismo/oratorio</h3>
        <div className="calendar-frame-wrap small">
          <iframe
            title="Calendario oratorio agenda"
            src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=NTFyNDZpOTI1Nmg4dG1xYmxqYmRycXZrdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bnI4ZnBoc2YwY3FwN2M1OGlzOGdsY2YxZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmtkNDY2aTBwcGw3amRydTA4Mm9zcTNhc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F09300&color=%23F6BF26&color=%237aa300&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>
      </section>
    </article>
  );
}

export default Oratorio;
