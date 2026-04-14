import ImagePlaceholder from "../components/ImagePlaceholder";

function Attivita() {
  return (
    <article className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Vita comunitaria</p>
          <h2>Attività e gruppi parrocchiali</h2>
          <p>
            In questa sezione trovi le principali proposte della parrocchia per adulti, famiglie, anziani e
            persone con fragilità.
          </p>
        </div>
        {/* TODO: sostituire con img/attivita/attivita.jpg */}
        <ImagePlaceholder label="Attività parrocchiali" height={230} />
      </header>

      <section className="info-card accent-green">
        <h3>Calendario attività</h3>
        <p>
          Vuoi sapere date e orari delle attività della parrocchia? Vai alla pagina
          {" "}
          <a href="/nataledelsignore/calendario">Calendario</a>.
        </p>
      </section>

      <section className="content-section">
        <h3>Gruppi della comunità</h3>
        <div className="timeline-cards">
          <article className="plain-card">
            <h4>Gruppo della Parola</h4>
            <p>Ogni martedì alle 9:30. Lettura e condivisione della Parola di Dio.</p>
          </article>

          <article className="plain-card">
            <h4>Cultura Popolare Famiglia</h4>
            <p>
              Circa 25 incontri culturali all&apos;anno su medicina, psicologia, economia, cultura generale,
              cristianesimo e temi di attualità. A maggio viene proposto anche un itinerario culturale in Piemonte.
            </p>
            <p>
              <a href="Pdf/programmaCPF.pdf">Programma CPF</a>
            </p>
          </article>

          <article className="plain-card">
            <h4>Gruppo Ore Serene</h4>
            <p>
              Un tempo condiviso per combattere solitudine e tristezza attraverso giochi, canti, relazioni e
              momenti di amicizia. In Avvento e Quaresima si condivide anche un pensiero religioso.
            </p>
          </article>

          <article className="plain-card">
            <h4>Gruppo Famiglia</h4>
            <p>
              Incontri generalmente il secondo sabato del mese alle 19:00 dopo la Messa. Riflessione sulle letture
              domenicali, condivisione e cena insieme (con la partecipazione anche dei bambini).
            </p>
          </article>

          <article className="plain-card">
            <h4>La Scintilla</h4>
            <p>
              Attività interparrocchiale a sostegno delle persone con disabilità: intrattenimento domenicale,
              visite a domicilio e settimane estive di sollievo per le famiglie.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <h3>Preparazione ai sacramenti</h3>
        <div className="grid-two">
          <article className="info-card accent-secondary">
            <h4>Battesimo</h4>
            <p>
              I battesimi dei bambini si celebrano ogni 15 giorni nelle Messe del sabato alle 18:00 e della
              domenica alle 11:00. È previsto un incontro di preparazione per le famiglie al sabato mattina.
            </p>
            <p>Per informazioni rivolgersi in segreteria parrocchiale.</p>
          </article>

          <article className="info-card accent-light">
            <h4>Matrimonio e Cresima adulti</h4>
            <p>Per informazioni e percorso di preparazione rivolgersi in segreteria parrocchiale.</p>
          </article>
        </div>
      </section>
    </article>
  );
}

export default Attivita;
