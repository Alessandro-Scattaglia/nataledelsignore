import ImagePlaceholder from "../components/ImagePlaceholder";

const membri = [
  {
    ruolo: "Parroco",
    nome: "don Piero Terzariol",
    todo: "img/donPiero.jpg",
  },
  {
    ruolo: "Collaboratore",
    nome: "don Giovanni Payno",
    todo: "img/donPayno.jpg",
  },
  {
    ruolo: "Collaboratore",
    nome: "don Domenico Monticone",
    todo: "img/donDomenico.jpg",
  },
  {
    ruolo: "Diacono",
    nome: "Benito Cutellè",
    todo: "img/diaconoBenito.jpeg",
  },
];

function IPreti() {
  return (
    <article className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Ministero pastorale</p>
          <h2>Sacerdoti, diacono e collaboratori</h2>
          <p>Le persone che accompagnano la vita liturgica e comunitaria della Parrocchia Natale del Signore.</p>
        </div>
        {/* TODO: sostituire con img/eucaristia.jpg */}
        <ImagePlaceholder label="Liturgia comunitaria" height={230} />
      </header>

      <section className="timeline-cards">
        {membri.map((membro) => (
          <article className="plain-card" key={membro.nome}>
            <h3>{membro.ruolo}</h3>
            <p>
              <strong>{membro.nome}</strong>
            </p>
            {/* TODO: sostituire con file immagine profilo */}
            <ImagePlaceholder label={`Foto ${membro.nome}`} height={170} />
            <p className="small-muted">Sorgente storica: {membro.todo}</p>
          </article>
        ))}
      </section>
    </article>
  );
}

export default IPreti;
