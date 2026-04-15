import "./LaStoria.css";

const periodiStorici = [
	{
		titolo: "Gli anni di don Michele",
		periodo: "1965-1970",
		eventi: [
			"1965: acquisto del capannone in via Lagnasco 7 (ex magazzino Recoaro) e avvio della chiesa sussidiaria.",
			"1 gennaio 1967: erezione giuridica della parrocchia Santo Natale con circa 5.000 famiglie.",
			"Collaboratori: don Serafino Bunino, don Livio Cubito, don Bruno Porta; poi don Angelo Rivoira e don Lino Baracco.",
			"1968-1969: presentazione e approvazione del progetto della nuova chiesa dell'arch. Armando Campagnoli.",
			"Avvio di una grande sottoscrizione comunitaria per finanziare il primo lotto dei lavori.",
			"19 luglio 1970: don Michele Bechis muore sulla parete del Castore, in val di Gressoney.",
		],
	},
	{
		titolo: "Gli anni di don Sebastiano",
		periodo: "1970-1991",
		eventi: [
			"25 ottobre 1970: ingresso di don Sebastiano Galletto come parroco.",
			"4 ottobre 1971: inizio lavori primo lotto (sottochiesa, locali catechismo e giovani).",
			"24 dicembre 1974: consacrazione della nuova chiesa di via Boston 37 da parte del card. Michele Pellegrino.",
			"1975: collocazione del Crocifisso donato dalla pittrice Gloria Giannetto.",
			"1976: trasferimento dei sacerdoti nella casa parrocchiale accanto alla chiesa.",
			"4 febbraio 1978: ordinazione a diacono permanente di Benito Cutellè.",
			"1979: inaugurazione centro per pensionati e collocazione della tela della Natività di Enrico Gamba.",
			"1981: installazione ascensore per favorire accessibilità ad anziani e persone in carrozzina.",
			"7 novembre 1983: nasce Cultura Popolare Famiglia da un'idea di don Lino Baracco.",
			"Luglio 1986: la parrocchia assume il titolo Natale del Signore.",
			"Novembre 1988: inaugurazione dell'oratorio nel centenario di don Bosco.",
			"8 dicembre 1990: esordio del coro Santo Natale.",
		],
	},
	{
		titolo: "Gli anni di don Romolo",
		periodo: "1991-2014",
		eventi: [
			"12 ottobre 1991: ingresso di don Romolo Chiabrando con don Giovanni Payno.",
			"1992: avvio della Messa annuale per anniversari di matrimonio e prime elezioni del CPP.",
			"Dal 1993: avvio sistematico della Lectio Divina in Avvento e Quaresima.",
			"28 maggio 1994: istituzione della Festa del Battesimo.",
			"1994: trasferimento di don Alberto Chiadò e arrivo di don Giuseppe Sotgiu.",
			"1997: avvio servizio Segreteria al telefono e nascita del gruppo Iniziative Culturali.",
			"Dal 1998: Messa annuale per gli ammalati con Unzione degli infermi.",
			"2001: il gruppo Iniziative Culturali diventa Costruire Insieme; arriva don Roberto Gottardo.",
			"2004: visita pastorale del card. Severino Poletto e mostra La parrocchia si racconta.",
			"2005: nascono i Gruppi del Vangelo.",
			"2006-2007: Missione Pensionati e Anziani, nasce il gruppo del cucito per Kibao.",
			"2007: don Roberto diventa parroco al Cafasso, arriva don David Duò.",
			"2009: nascono Ore Serene e Ginnasticaffè; installato impianto videoproiezione in chiesa.",
			"2010: nasce il gruppo giovani EDI.",
			"2012: prima Festa Parrocchiale (Festa dell'Accoglienza) e visita del vescovo Nosiglia.",
			"2013-2014: nuovi ingressi pastorali, nascita del direttivo oratorio e passaggio di consegne a don Piero.",
			"11 ottobre 2014: don Romolo diventa rettore del Santuario di Cristo Re.",
		],
	},
	{
		titolo: "Gli anni di don Piero",
		periodo: "dal 2014 a oggi",
		eventi: [
			"19 ottobre 2014: ingresso di don Piero Terzariol come parroco.",
			"2014: Festa Parrocchiale con il tema La fede è bellezza.",
			"2015: Festa Pensare in grande: il coraggio della fede e prima StraNatale nel quartiere.",
			"2016: accoglienza di tre migranti (Munir, Francis, Adam), 24 ore di adorazione e nuove iniziative caritative.",
			"2017: celebrazione dei 50 anni della parrocchia.",
			"2020: pandemia Covid, sospensione celebrazioni in presenza e proposte online di preghiera e formazione.",
			"2020-2021: prosecuzione della solidarietà (ceste in chiesa e spesa sospesa).",
			"4 settembre 2022: saluto a don Alberto verso il nuovo incarico pastorale.",
			"10 giugno 2023: ordinazione sacerdotale di don Fabio Barotto, nuovo viceparroco.",
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
					<article key={periodo.titolo} className="plain-card">
						<h3>{periodo.titolo}</h3>
						<p className="period-label">{periodo.periodo}</p>
						<ul>
							{periodo.eventi.map((evento) => (
								<li key={evento}>{evento}</li>
							))}
						</ul>
					</article>
				))}
			</section>
		</article>
	);
}

export default LaStoria;
