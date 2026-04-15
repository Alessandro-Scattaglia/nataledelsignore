import "./IPreti.css";

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
		<article className="page page-ipreti">
			<header className="page-hero">
				<div>
					<p className="eyebrow">Ministero pastorale</p>
					<h2>Sacerdoti, diacono e collaboratori</h2>
					<p>Le persone che accompagnano la vita liturgica e comunitaria della Parrocchia Natale del Signore.</p>
				</div>
				<img
					src={`${import.meta.env.BASE_URL}img/eucaristia.jpg`}
					alt="Liturgia comunitaria"
					className="content-image ipreti-hero-image"
				/>
			</header>

			<section className="timeline-cards">
				{membri.map((membro) => (
					<article className="plain-card" key={membro.nome}>
						<h3>{membro.ruolo}</h3>
						<p>
							<strong>{membro.nome}</strong>
						</p>
						<img
							src={`${import.meta.env.BASE_URL}${membro.todo}`}
							alt={`Foto ${membro.nome}`}
							className="content-image ipreti-member-image"
						/>
					</article>
				))}
			</section>
		</article>
	);
}

export default IPreti;
