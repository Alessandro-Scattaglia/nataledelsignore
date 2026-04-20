import "./LaStoria.css";

const periodiStorici = [
	{
		titolo: "Gli anni di don Michele",
		periodo: "1965-1970",
		paragrafi: [
			"Nel 1965 la comunità compie il primo passo concreto: acquista il capannone di via Lagnasco 7, ex magazzino Recoaro, e avvia la chiesa sussidiaria. Due anni dopo, il 1° gennaio 1967, nasce ufficialmente la parrocchia Santo Natale, con circa 5.000 famiglie.",
			"Accanto a don Michele operano diversi sacerdoti, mentre tra il 1968 e il 1969 viene approvato il progetto della nuova chiesa, firmato dall'architetto Armando Campagnoli. La comunità si mobilita con una grande sottoscrizione per finanziare i lavori, in un periodo segnato anche dal dolore per la morte di don Michele, il 19 luglio 1970 in val di Gressoney.",
		],
	},
	{
		titolo: "Gli anni di don Sebastiano",
		periodo: "1970-1991",
		paragrafi: [
			"Con l'arrivo di don Sebastiano, il 25 ottobre 1970, la parrocchia entra in una fase di costruzione intensa. Nel 1971 iniziano i lavori del primo lotto e il 24 dicembre 1974 il cardinale Michele Pellegrino consacra la nuova chiesa di via Boston 37.",
			"Negli anni successivi crescono gli spazi e i segni della vita comunitaria: il Crocifisso donato da Gloria Giannetto, la casa parrocchiale, il centro pensionati, la tela della Natività di Enrico Gamba e l'ascensore per l'accessibilità. Nascono nuove realtà culturali e musicali, mentre nel 1988 viene inaugurato l'oratorio e nel 1990 debutta il coro Santo Natale.",
		],
	},
	{
		titolo: "Gli anni di don Romolo",
		periodo: "1991-2014",
		paragrafi: [
			"Dal 1991 la guida di don Romolo accompagna una comunità che si struttura sempre di più: nascono appuntamenti stabili come la Messa per gli anniversari di matrimonio, la Lectio Divina nei tempi forti e la Festa del Battesimo. Cresce anche la rete di collaborazioni pastorali con nuovi ingressi sacerdotali.",
			"Tra la fine degli anni Novanta e i primi Duemila prendono forma servizi e gruppi che segnano il volto della parrocchia: segreteria telefonica, Iniziative Culturali poi Costruire Insieme, Gruppi del Vangelo, attenzione ad anziani e ammalati, nuove attività per i giovani. Il percorso culmina nel passaggio di testimone a don Piero nel 2014.",
		],
	},
	{
		titolo: "Gli anni di don Piero",
		periodo: "dal 2014 a oggi",
		paragrafi: [
			"Con l'ingresso di don Piero nel 2014 la comunità rilancia il proprio cammino puntando su fede, bellezza e presenza nel quartiere. Le feste parrocchiali, la StraNatale e i momenti di adorazione diventano occasioni per incontrare persone nuove e rafforzare i legami.",
			"Negli anni recenti la parrocchia attraversa anche prove difficili, come la pandemia, mantenendo viva la preghiera e la formazione con proposte online e iniziative solidali. Questo tempo è segnato da gesti di accoglienza, dal saluto a collaboratori storici e dall'arrivo di nuove energie pastorali, come l'ordinazione di don Fabio nel 2023.",
		],
	},
];

function LaStoria() {
	return (
		<article className="page page-lastoria">
			<header className="page-hero page-hero-history">
				<div>
					<p className="eyebrow">Memoria della comunità</p>
					<h2>La nostra storia</h2>
					<p>
						Un cammino iniziato negli anni Sessanta e cresciuto grazie al servizio di sacerdoti, laici, famiglie,
						giovani e anziani del quartiere.
					</p>
				</div>
			</header>

			<section className="timeline-cards">
				{periodiStorici.map((periodo) => (
					<article key={periodo.titolo} className="plain-card history-period-card">
						<div className="history-period-head">
							<p className="period-label">{periodo.periodo}</p>
							<h3>{periodo.titolo}</h3>
						</div>
						<div className="history-period-text">
							{periodo.paragrafi.map((paragrafo) => (
								<p key={paragrafo}>{paragrafo}</p>
							))}
						</div>
					</article>
				))}
			</section>
		</article>
	);
}

export default LaStoria;
