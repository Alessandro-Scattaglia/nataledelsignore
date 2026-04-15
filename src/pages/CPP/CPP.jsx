import "./CPP.css";

const membriCpp2024 = [
	"Clelia Barberis",
	"Roberta Blesi",
	"Fabio Caldarella",
	"Angela Ciavarella",
	"Bruno Dal Canton",
	// "Fulvio Francesia",
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

const fotoCppByNome = {
	"Clelia Barberis": "img/cpp2024/Barberis Clelia.jpg",
	"Roberta Blesi": "img/cpp2024/Blesi Roberta.jpg",
	"Fabio Caldarella": "img/cpp2024/Caldarella Fabio.jpg",
	"Angela Ciavarella": "img/cpp2024/Ciavarella Angela.jpg",
	"Bruno Dal Canton": "img/cpp2024/Dal Canton Bruno.jpg",
	"Anna Galazzo": "img/cpp2024/Galazzo Anna.jpg",
	"Roberta Garrone": "img/cpp2024/Garrone Roberta.jpg",
	"Carlo Grignani": "img/cpp2024/Grignani Carlo.jpg",
	"Paolo Leoncino": "img/cpp2024/Leoncino Paolo.jpg",
	"Giuliana Liistro Oria": "img/cpp2024/Liistro Oria Giuliana.jpg",
	"Eugenio Livigni": "img/cpp2024/Livigni Eugenio.jpg",
	"Andrea Lupo": "img/cpp2024/Lupo Andrea.jpg",
	"Roberto Muratori": "img/cpp2024/Muratori Roberto.jpg",
	"Vittoria Risitano": "img/cpp2024/Risitano Vittoria.jpg",
	"Marco Rizzonato": "img/cpp2024/Rizzonato Marco.jpg",
	"Paola Roseo Maserin": "img/cpp2024/Roseo Paola.jpg",
	"Ottavio Rucci": "img/cpp2024/Rucci Ottavio.jpg",
	"Silvia Varano": "img/cpp2024/Varano Silvia.jpg",
};

function CPP() {
	return (
		<article className="page page-cpp">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Partecipazione comunitaria</p>
					<h2>Consiglio Pastorale Parrocchiale</h2>
					<p>Composizione del CPP 2024.</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/comunità5.jpg`}
					alt="Comunità parrocchiale"
					className="content-image cpp-hero-image"
				/>
			</header>

			<section className="cpp-grid">
				{membriCpp2024.map((nome) => (
					<article className="cpp-card" key={nome}>
						<img
							src={`${import.meta.env.BASE_URL}${fotoCppByNome[nome] ?? "img/comunità5.jpg"}`}
							alt={`Foto ${nome}`}
							className="content-image cpp-photo cpp-member-image"
						/>
						<p>{nome}</p>
					</article>
				))}
			</section>
		</article>
	);
}

export default CPP;
