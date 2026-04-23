import "./Home.css";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { MdFoodBank } from "react-icons/md";
import { FaHandsHelping } from "react-icons/fa";
import { BiSolidChurch } from "react-icons/bi";
import { BsBank2 } from "react-icons/bs";

const weeklyFocus = {
  period: "Settimana 21-27 aprile 2026",
  note: "Questa area e pensata per essere aggiornata ogni settimana con le novita principali.",
  highlights: [
    {
      when: "Venerdi 20:45",
      title: "Adorazione comunitaria",
      detail: "Preghiera guidata in chiesa con spazio per confessioni.",
    },
    {
      when: "Sabato 15:00",
      title: "Oratorio aperto",
      detail: "Laboratori, tornei e accoglienza per ragazzi e famiglie.",
    },
    {
      when: "Domenica 11:00",
      title: "Messa comunitaria",
      detail: "A seguire caffe condiviso nel salone parrocchiale.",
    },
  ],
};

const quickLinks = [
  {
    label: "Canale WhatsApp",
    description: "Aggiornamenti rapidi su appuntamenti e iniziative.",
    href: "http://bit.ly/CanaleNDS",
    cta: "Unisciti ora",
    icon: <FaWhatsapp />,
  },
  {
    label: "Canale YouTube",
    description: "Dirette, materiali e comunicazioni della comunita.",
    href: "http://www.youtube.com/channel/UCimGbVpSKU-d7X4eIvm0ZAw",
    cta: "Apri il canale",
    icon: <FaYoutube />,
  },
  {
    label: "Orari segreteria",
    description: "Mer/Gio 10:00-12:00, Gio 18:30-19:30, Ven 17:00-19:00.",
    href: "/nataledelsignore/orari",
    cta: "Vedi tutti gli orari",
    icon: <FaClock />,
  },
];
const volantinoOratorio = [
  {
    label: "Volantino Oratorio",
    day: "Sabato 18 aprile 2026",
    description: (
      <div>
        <p>
          Questo sabato, per i ragazzi delle <b>elementari</b>, il tema proposto
          è ...
        </p>
        <p>
          Invece per i ragazzi delle <b>medie</b>, il tema è ...
        </p>
      </div>
    ),
    img: `${import.meta.env.BASE_URL}img/volantino_oratorio_18-04-26.png`,
  },
];

const aiutoEconomico = [
  {
    label: "Diamoci una mano",
    description: (
      <div>
        <p>
          La nostra comunità cresce quando ci prendiamo cura gli uni degli
          altri. Nessuno deve sentirsi solo di fronte alle piccole o grandi
          difficoltà quotidiane.
        </p>
        <p>
          Se ti trovi in un momento di necessità (commissioni, spesa, farmacia)
          o se senti il desiderio di donare un po' del tuo tempo per aiutare il
          prossimo, siamo qui per te:
        </p>
        <ul>
          <li>
            <strong>Contatto telefonico:</strong> Chiama lo{" "}
            <strong>011.352013</strong>
            <br />
            <small>
              Disponibile martedì, giovedì e venerdì (ore 10.00 - 12.00).
            </small>
          </li>
          <li>
            <strong>Scrivici:</strong> Invia una mail a{" "}
            <a href="mailto:sanvincenzo.nataledelsignore@gmail.com">
              sanvincenzo.nataledelsignore@gmail.com
            </a>
          </li>
        </ul>
        <p>
          <em>
            "Insieme possiamo fare la differenza, un piccolo gesto alla volta."
          </em>
        </p>
      </div>
    ),
    icon: <FaHandsHelping />,
    cta: "Scopri come aiutare",
  },
  {
    label: "Sostegno alla parrocchia",
    description: (
      <div>
        <p>
          Se lo desideri, puoi sostenere uno dei progetti coordinati della
          nostra comunità:
        </p>
        <ul>
          <li>Aiuto a persone in difficoltà economiche</li>
          <li>Contributo alle spese ordinarie della parrocchia</li>
          <li>Progetto migranti</li>
        </ul>
        <p>
          Se vuoi fare un'offerta con bonifico, puoi fare il versamento sul
          conto della parrocchia:
        </p>
        <p>
          <strong>IBAN:</strong> IT88Q0623001137000046359622
          <br />
          <strong>Presso:</strong> Credit Agricole
          <br />
          <strong>Intestato a:</strong> Parrocchia Natale del Signore
          <br />
          <strong>Causale:</strong> "Persone in difficoltà", "Offerta",
          "Migranti"
        </p>
        <p>
          Puoi anche contribuire con offerte in denaro dopo le messe o offerte
          in prodotti alimentari nelle ceste in fondo alla chiesa.
        </p>
      </div>
    ),
    icon: <BiSolidChurch />,
  },
  {
    label: "Oratorio",
    description: (
      <div>
        <p>Sostegno alle attività dei giovani e dell'oratorio.</p>
        <p>
          <strong>IBAN:</strong> IT71T0304801004000000085432
          <br />
          <strong>Presso:</strong> Banca del Piemonte
          <br />
          <strong>Intestato a:</strong> Oratorio Natale del Signore - APS
        </p>
      </div>
    ),
    icon: <BsBank2 />,
  },
  {
    label: "Banco alimentare 2025",
    description: "",
    href: "",
    cta: "",
    icon: <MdFoodBank />,
    img: `${import.meta.env.BASE_URL}img/banco2025.jpg`,
  },
];
function Home() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="hero-copy">
          <p className="hero-kicker">Comunita in cammino</p>
          <h1>Parrocchia Natale del Signore</h1>
          <p className="hero-description">
            Uno spazio unico per fede, relazioni e vita quotidiana della
            comunita. Qui trovi subito le novita della settimana, senza cercare
            tra pagine diverse.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href="/nataledelsignore/calendario">
              Calendario completo
            </a>
            <a className="btn-secondary" href="/nataledelsignore/orari">
              Orari parrocchia
            </a>
          </div>
        </div>

        <figure className="hero-visual">
          <img
            src={`${import.meta.env.BASE_URL}img/DSC2144.jpg`}
            alt="Parrocchia Natale del Signore"
          />
        </figure>
      </section>

      <section
        className="weekly-section"
        aria-label="Aggiornamenti settimanali"
      >
        <aside className="oratorio-panel">
          <div className="oratorio-flyer-wrap">
            <img
              className="volantino-oratorio"
              src={volantinoOratorio[0].img}
              alt={volantinoOratorio[0].label}
            />
          </div>

          <div className="oratorio-copy">
            <p className="oratorio-tag">{weeklyFocus.period}</p>
            <h2>Oratorio</h2>
            <h4>{volantinoOratorio[0].day}</h4>
            <p>
              Attivita, proposte e appuntamenti per ragazzi, famiglie e
              comunita.
            </p>
            <p>{volantinoOratorio[0].description}</p>
            <a href="/nataledelsignore/oratorio">Vai alla pagina Oratorio</a>
          </div>
        </aside>

        <article className="weekly-board">
          <header>
            <p className="weekly-period">{weeklyFocus.period}</p>
            <h2>Aggiornamenti della settimana</h2>
            <p className="weekly-note">{weeklyFocus.note}</p>
          </header>

          <ul className="weekly-list">
            {weeklyFocus.highlights.map((item) => (
              <li key={item.title}>
                <span className="weekly-when">{item.when}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="weekly-updated">{weeklyFocus.updatedAt}</p>
        </article>
      </section>

      <section className="quick-links-grid" aria-label="Accessi rapidi">
        {quickLinks.map((link) => (
          <article className="quick-link" key={link.label}>
            <h3>{link.label}</h3>
            <div className="quick-link-icon">{link.icon}</div>
            <p>{link.description}</p>
            <a href={link.href} className="quick-link-cta">
              {link.cta}
            </a>
          </article>
        ))}
      </section>

      <section className="agenda-panel">
        <div className="agenda-copy">
          <h2>Agenda rapida</h2>
          <p>
            Vista sintetica dei prossimi appuntamenti. Per l&apos;elenco
            completo usa il calendario dedicato.
          </p>
        </div>

        <iframe
          title="Calendario agenda rapida"
          src="https://calendar.google.com/calendar/embed?height=400&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FRome&src=cGFycm9jY2hpYS5uYXRhbGVkZWxzaWdub3JlQGdtYWlsLmNvbQ&src=NTFyNDZpOTI1Nmg4dG1xYmxqYmRycXZrdnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bnI4ZnBoc2YwY3FwN2M1OGlzOGdsY2YxZWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aGVxa28wYzhvbGUzcmdlYzY0Y3FxZTE3amtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZmtkNDY2aTBwcGw3amRydTA4Mm9zcTNhc3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cHNiNnBrZDNiYW00bmNobnE2MDdlNXFjaXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%239762cc&color=%23F09300&color=%23F6BF26&color=%237CB342&color=%237aa300&color=%23D81B60&mode=AGENDA&showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
        />
        <section className="quick-links-grid" aria-label="Accessi rapidi">
          {aiutoEconomico.slice(0, 2).map((item) => (
            <article className="quick-link" key={item.label}>
              <h3>{item.label}</h3>
              <div className="quick-link-icon">{item.icon}</div>
              <p>{item.description}</p>
              <a href="/nataledelsignore/carita" className="quick-link-cta">
                {item.cta}
              </a>
            </article>
          ))}

          <div className="quick-link-col-stack">
            {aiutoEconomico.slice(2).map((item) => (
              <article className="quick-link" key={item.label}>
                <h3>{item.label}</h3>
                <div className="quick-link-icon">{item.icon}</div>
                <p>{item.description}</p>
                {item.img && (
                  <img
                    src={item.img}
                    alt={item.label}
                    className="banco-alimentare-img"
                  />
                )}
                <a href="/nataledelsignore/carita" className="quick-link-cta">
                  {item.cta}
                </a>
              </article>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
