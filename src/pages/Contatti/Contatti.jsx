import "./Contatti.css";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const InstagramGradient = () => (
  <svg width="0" height="0">
    <linearGradient id="ig-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop stopColor="#405DE6" offset="0%" />
      <stop stopColor="#5851DB" offset="10%" />
      <stop stopColor="#833AB4" offset="20%" />
      <stop stopColor="#C13584" offset="30%" />
      <stop stopColor="#E1306C" offset="40%" />
      <stop stopColor="#FD1D1D" offset="50%" />
      <stop stopColor="#F56040" offset="60%" />
      <stop stopColor="#F77737" offset="70%" />
      <stop stopColor="#FCAF45" offset="80%" />
      <stop stopColor="#FFDC80" offset="90%" />
    </linearGradient>
  </svg>
);

function Contatti() {
  return (
    <article className="page page-contatti">
      <InstagramGradient />
      <header className="page-hero">
        <div>
          <p className="eyebrow">Contatti</p>
          <h2>Resta in contatto con la parrocchia</h2>
          <p>
            Canali utili per comunicazioni, attività pastorali, iniziative
            sociali e sostegno alla comunità.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}img/nataledelsignore.jpg`}
          alt="Facciata parrocchia"
          className="content-image contatti-hero-image"
        />
      </header>

      <section className="grid-two">
        <article className="info-card accent-secondary">
          <h3>Contatti principali</h3>
          <p>
            <strong>Parrocchia Natale del Signore</strong>
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

        <article className="info-card accent-gold">
          <h3>Email dei servizi</h3>
          <ul>
            <li>
              Oratorio:{" "}
              <a href="mailto:parrocchia.nataledelsignore@gmail.com">
                parrocchia.nataledelsignore@gmail.com
              </a>
            </li>
            <li>
              Aiuto alimenti:{" "}
              <a href="mailto:aiutoalimenti.nataledelsignore@gmail.com">
                aiutoalimenti.nataledelsignore@gmail.com
              </a>
            </li>
            <li>
              Sportello lavoro:{" "}
              <a href="mailto:serviziolavoro.nataledelsignore@gmail.com">
                serviziolavoro.nataledelsignore@gmail.com
              </a>
            </li>
            <li>
              San Vincenzo:{" "}
              <a href="mailto:sanvincenzo.nataledelsignore@gmail.com">
                sanvincenzo.nataledelsignore@gmail.com
              </a>
            </li>
          </ul>
        </article>
      </section>

      <section className="grid-two ">
        <article className="info-card accent-light ">
          <h3>I nostri media</h3>
          <ul className="social">
            <li>
              <FaFacebook color="#3b5998" />
              <a
                href="https://www.facebook.com/parrocchia.nataledelsignore"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor"
              >
                Facebook: parrocchia.nataledelsignore
              </a>
            </li>
            <li>
              <FaYoutube color="#FF0000" />
              <a
                href="https://www.youtube.com/channel/UCimGbVpSKU-d7X4eIvm0ZAw"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor"
              >
                YouTube: @parrocchianataledelsignore8214
              </a>
            </li>
            <li>
              <FaXTwitter color="#000000" />
              <a
                href="https://x.com/ParrocchiaNdS"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor"
              >
                X-Twitter: @ParrocchiaNdS
              </a>
            </li>
            <li>
              <FaInstagram
                style={{ fill: "url(#ig-gradient)", fontSize: "50px" }}
              />{" "}
              <a
                href="https://www.instagram.com/parrocchiands/"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor"
              >
                Instagram: @Parrocchiands
              </a>
            </li>
            <li>
              <FaWhatsapp color="#25D366" />{" "}
              <a
                href="https://whatsapp.com/channel/0029VaExm7g0bIdgXOEJPI0D"
                target="_blank"
                rel="noopener noreferrer"
                className="anchor"
              >
                WhatsApp: CanaleNdS
              </a>
            </li>
          </ul>
        </article>

        <article className="info-card accent-red">
          <h3>Riferimenti bancari</h3>
          <p>
            <strong>Parrocchia Natale del Signore</strong>
            <br />
            IBAN: IT88Q0623001137000046359622
            <br />
            Credit Agricole
          </p>
          <p>
            <strong>Oratorio Natale del Signore - APS</strong>
            <br />
            IBAN: IT71T0304801004000000085432
            <br />
            Banca del Piemonte
          </p>
          <p>
            <strong>
              ODV Società di S. Vincenzo de&apos; Paoli - Consiglio centrale
              Torino
            </strong>
            <br />
            IBAN: IT29F0623030653000047220822
            <br />
            Credit Agricole
          </p>
        </article>
      </section>

      <section className="content-section">
        <h3>Mappa</h3>
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
    </article>
  );
}

export default Contatti;
