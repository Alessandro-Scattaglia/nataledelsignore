import ImagePlaceholder from "../components/ImagePlaceholder";

const membriCpp2024 = [
  "Clelia Barberis",
  "Roberta Blesi",
  "Fabio Caldarella",
  "Angela Ciavarella",
  "Bruno Dal Canton",
  "Fulvio Francesia",
  "Anna Galazzo",
  "Roberta Garrone",
  "Carlo Grignani",
  "Paolo Leoncino",
  "Giuliana Liistro Oria",
  "Eugenio Livigni",
  "Andrea Lupo",
  "Roberto Muratori",
  "Vittoria Risitano",
  "Marco Rizzonato",
  "Paola Roseo Maserin",
  "Ottavio Rucci",
  "Silvia Varano",
];

function CPP() {
  return (
    <article className="page">
      <header className="page-hero">
        <div>
          <p className="eyebrow">Partecipazione comunitaria</p>
          <h2>Consiglio Pastorale Parrocchiale</h2>
          <p>Composizione del CPP 2024.</p>
        </div>
        {/* TODO: sostituire con img/comunità5.jpg */}
        <ImagePlaceholder label="Comunità parrocchiale" height={230} />
      </header>

      <section className="cpp-grid">
        {membriCpp2024.map((nome) => (
          <article className="cpp-card" key={nome}>
            {/* TODO: sostituire con img/cpp2024/<nome>.jpg */}
            <ImagePlaceholder label={`Foto ${nome}`} height={140} className="cpp-photo" />
            <p>{nome}</p>
          </article>
        ))}
      </section>
    </article>
  );
}

export default CPP;
