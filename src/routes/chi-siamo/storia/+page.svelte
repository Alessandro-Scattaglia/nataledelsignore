<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	let showButton = false;

	onMount(() => {
		const handleScroll = () => {
			showButton = window.scrollY > 300; // appare dopo 300px
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function scrollToTop() {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<a
	href="{base}/chi-siamo/storia"
	class="torna {showButton ? 'show' : ''}"
	on:click|preventDefault={scrollToTop}
	aria-label="Torna su"
>
	<i class="fa-solid fa-arrow-up"></i>
</a>

<div class="pagina-storia">
	<header class="header-storia">
		<img src="{base}/img/chi-siamo/header-bg.jpg" alt="Sfondo parrocchia" class="sfondo-header" />
		<div class="contenuto-header">
			<h1>La nostra storia</h1>
			<p>Un cammino di fede, persone e comunità.</p>
		</div>
	</header>

	<main class="timeline-storia">
		<section id="dmichele" class="blocco-storia">
			<div class="pallino"></div>
			<div class="contenuto">
				<h2>Gli anni di don Michele (1965-1970)</h2>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Negli anni '60 la zona dell'attuale parrocchia, appartenente alla chiesa Santa Rita,
							va via via popolandosi ed arricchendosi di giovani famiglie, di case e di scuole.
							L'esplosione demografica del quartiere <strong
								>rende necessaria la creazione di una nuova chiesa</strong
							>.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia1.jpg" alt="Foto storica 1" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia2.jpg" alt="Foto storica 2" />
					</div>
					<div class="testo">
						<p>
							Con l'interessamento dell'Opera <em>Torino-Chiese</em>, il 15 marzo 1965 il Santuario
							di Santa Rita acquista un capannone, magazzino della Recoaro in via Gorizia 170/7 (poi
							via Lagnasco 7), per trasformarlo in una piccola chiesa. La chiesa sussidiaria,
							segnalata da una grande croce luminosa, entra in funzione il 27 giugno, festa del
							Corpus Domini.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Il 1º gennaio 1967 viene eretta giuridicamente la parrocchia Santo Natale, che conta
							5.000 famiglie. A <strong>don Michele Bechis</strong>, unico sacerdote in servizio
							nella parrocchia, si affiancano come viceparroci
							<strong>don Serafino Bunino, don Livio Cubito e don Bruno Porta</strong>, sacerdote
							convittore.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/chiesa_vecchia.jpg" alt="Foto storica 3" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/foto_altare.jpg" alt="Foto storica 4" />
					</div>
					<div class="testo">
						<p>
							Il 15 ottobre viene celebrata una <strong>Messa in piazza Montanari</strong> per inaugurare
							la nuova parrocchia. Domenica 17 dicembre il cardinale Michele Pellegrino, Arcivescovo
							di Torino, celebra la Santa Messa. I locali di cui la parrocchia dispone sono, oltre alla
							chiesa di via Lagnasco 7 con un'aula vicino alla sacrestia, la casa parrocchiale in un
							alloggio al primo piano di via Gorizia 172, l'ufficio parrocchiale al piano terra e due
							aule per il catechismo nel negozio e nel seminterrato dello stesso edificio.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							<strong>I locali si rivelano quasi subito insufficienti</strong> e già nel novembre del
							1968 è stato presentato ai fedeli il progetto di massima, studiato dall'architetto Armando
							Campagnoli, per una nuova chiesa. Tale progetto viene approvato dalla commissione di arte
							sacra di Torino e di Roma, quindi dall'autorità civile.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="dsebastiano" class="blocco-storia">
			<div class="pallino"></div>
			<div class="contenuto">
				<h2 id="dsebastiano">Gli anni di don Sebastiano (1970-1991)</h2>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							<strong>Don Sebastiano Galletto</strong> accetta la nomina come parroco del S. Natale:
							l'ingresso avviene il 25 ottobre. Viceparroci sono
							<strong>don Serafino Bunino, don Livio Cubito e don Lino Baracco</strong> come cappellano.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/don_sebastiano.jpg" alt="Ingresso don Sebastiano" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia8.jpg" alt="Costruzione Natale del Signore" />
					</div>
					<div class="testo">
						<p>
							Il 21 maggio 1971 ha luogo una riunione del parroco, di don Serafino e dei membri
							della commissione economica con mons. Enriore, Direttore dell'Opera Torino Chiese, e
							il geom. Arata (facente parte del direttivo di Torino-Chiese). In essa si prende atto
							della votazione del <strong
								>Consiglio Comunale che cede il terreno per la costruzione del Centro Religioso del
								Santo Natale</strong
							> (circa 3600 mq.).
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Si decide circa le spese per il primo lotto dei lavori che ammontavano a 80 milioni di
							lire interamente a carico della comunit&agrave; parrocchiale. Don Enriore approva la
							proposta di un impegno mensile da suggerire ai parrocchiani a partire dall'autunno
							successivo, per contribuire all'ammortamento della spesa. I lavori vengono affidati
							all'impresa Broglino, che inizia il primo lotto dei lavori (sottochiesa, locali per
							catechismo e giovani) il 4 ottobre 1971.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia3.jpg" alt="Costruzione Natale del Signore" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia4.jpg" alt="Costruzione Natale del Signore" />
					</div>
					<div class="testo">
						<p>
							La domenica 19 dicembre il Cardinale Michele Pellegrino compie la visita pastorale al
							S. Natale. Per la prima volta l'Arcivescovo incontra nelle loro case i malati.
							Nell'estate del 1971 hanno avuto inizio a Bardonecchia i campi estivi per i ragazzi,
							animati da <strong>don Serafino Bunino</strong> e dal
							<strong>chierico Gianni Oderda</strong>, che viene ordinato sacerdote Il 26 giugno
							1972 e assegnato alla parrocchia,dove rester&agrave; come viceparroco fino al
							settembre del 1977.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Dal mese di novembre 1972 la comunit&agrave; dispone dei locali del seminterrato per
							il catechismo e le attivit&agrave; di gruppo dei giovani e degli adulti. A metà
							settembre 1973 riprendono i lavori, affidati all'impresa Gustavo Fiorillo di Pinerolo. <strong
								>Don Serafino Bunino</strong
							>
							&egrave; nominato parroco a Citt&agrave; Giardino nella comunit&agrave; del Ss. Nome di
							Maria. Il nuovo viceparroco si chiama <strong>don Giuliano Burzio</strong>.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia9.jpg" alt="Costruzione Natale del Signore" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/dedicazione8.jpg" alt="Dedicazione Natale del Signore" />
					</div>
					<div class="testo">
						<p>
							Il <strong>papa Paolo VI</strong> con il documento &quot;<em>Immensae caritatis</em
							>&quot; concede ai laici la distribuzione della Comunione ai malati presso le loro
							abitazioni e durante la celebrazione della S. Messa in assenza di un numero
							sufficiente di sacerdoti. Per svolgere questo ministero vengono autorizzati dal
							Cardinale Michele Pellegrino 30 ministri straordinari nella parrocchia del S. Natale.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Il 24 dicembre 1974 il Cardinale Michele Pellegrino presiede la Celebrazione
							Eucaristica per consacrare la nuova chiesa di via Boston 37. Nel 1975 la pittrice
							Gloria Giannetto dona il Crocifisso, che viene collocato sull'altare al posto di
							quello di polistirolo. Nel mese di marzo 1976 i sacerdoti si trasferiscono
							dall'abitazione di via Gorizia 172 nella nuova casa parrocchiale accanto alla chiesa.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/storia7.jpg" alt="Costruzione Natale del Signore" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/foto_primo_campo.jpg" alt="Campi estivi" />
					</div>
					<div class="testo">
						<p>
							Il 4 febbraio 1978 l'Arcivescovo Anastasio Ballestrero ordina diacono permanente <strong
								>Benito Cutell&eacute;</strong
							>. Nel mese di settembre<strong> don Gianni Oderda</strong> lascia la parrocchia per
							diventare prete operaio, lo sostituisce <strong>don Renzo Gariglio</strong>.Monsignor
							Giuseppe Garneri, Vescovo emerito di Susa, 1'8 dicembre 1979 benedice e inaugura il
							centro per i circa 200 pensionati del S. Natale. Nello stesso mese è collocata sopra
							l'altare la tela raffigurante la Natività, opera di Enrico Gamba (firmata e datata
							1881), donata alla parrocchia dalle monache Clarisse Cappuccine del Monastero di
							strada S. Vito.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Nel 1981 oltre alle nuove porte della chiesa viene installato l'ascensore per
							consentire agli ammalati in carrozzella e agli anziani di accedere alla chiesa. Il 7
							novembre 1983 nasce Cultura Popolare famiglia, da un'idea di d. Lino
							Baracco.Nell'estate del 1985, a fianco della chiesa, si ricava un piccolo campo giochi
							per i ragazzi che diviene utilissimo per le attività di oratorio. Nel luglio 1986, in
							occasione del riordino normativo voluto dai Vescovi italiani, la parrocchia Santo
							Natale assume un nuovo titolo: <strong>Natale del Signore</strong>. Il 17 novembre
							1985 viene consacrato in Duomo il <strong>diacono Giuseppe Bertani</strong>. Nel 1986
							il viceparroco, <strong>don Renzo Gariglio</strong>, è nominato parroco a
							Cavallermaggiore, e nel mese di settembre 1987 la comunità accoglie il nuovo vice
							parroco <strong>don Alberto Chiadò</strong>. Nel mese di novembre 1988, con la
							partecipazione dell'Arcivescovo Anastasio Ballestrero, s'inaugura, in occasione del
							centenario di don Bosco, l'oratorio. L&rsquo;8 dicembre 1990 esordisce il coro Santo
							Natale diretto dal maestro Ferrero.
						</p>
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="testo">
						<p>
							Nel mese di maggio 1991 don Sebastiano annuncia alla comunità che lascerà la
							parrocchia per svolgere a tempo pieno il suo nuovo incarico, affidatogli
							dall'Arcivescovo Giovani Saldarini, di Direttore spirituale nel Seminario maggiore. In
							giugno viene sistemato dietro l'altare il quadro di Mario Caffaro Rore, raffigurante
							una moderna natività in armonia con l'architettura sobria della chiesa.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="dromolo" class="blocco-storia">
			<div class="pallino"></div>
			<div class="contenuto">
				<h2>Gli anni di don Romolo (1991-2014)</h2>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Il 12 ottobre 1991 <strong>don Romolo Chiabrando</strong> fa il suo ingresso come
							terzo parroco, portando con sé il suo compagno di studi e collaboratore
							<strong>don Giovanni Payno</strong>.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/Immagine15.jpg" alt="Ingresso don Romolo" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/immagine5.jpg" alt="Festa battezzati" />
					</div>
					<div class="testo">
						<p>
							Il 1992 inizia la tradizionale Messa annuale di ringraziamento per gli anniversari
							significativi di matrimonio, preceduta da una serata di riflessione e seguita da un
							momento conviviale.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Sempre nel 1992 il CPP viene eletto per la prima volta dai fedeli e dai membri dei
							gruppi parrocchiali. Le elezioni si ripetono nel 1997 e 2002. Nel 1993 iniziano i
							corsi di preparazione alla Cresima per adulti, gestiti da laici.
						</p>
						<p>
							Nell'ottobre 1994 prende vita il Gruppo Famiglia, attivo fino al 2006. Si forma anche
							il Gruppo Giovani Coppie, con l'obiettivo di diventare il futuro Gruppo Famiglie.
						</p>
						<p>
							Già nel 1993 don Romolo introduce la <em>Lectio divina</em>, con incontri guidati da
							don Arturo Giaccone. I momenti forti dell'anno (Avvento e Quaresima) saranno
							caratterizzati da proposte settimanali di 'Lectio' guidate da don Romolo.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/40 SR RAGAZ.JPG" alt="Visita pastorale" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/MOSTRA 081.jpg" alt="Mostra parrocchia" />
					</div>
					<div class="testo">
						<p>
							Il 28 maggio 1994 viene istituita la '<em>Festa del Battesimo</em>' per i battezzati
							dell'anno precedente e le loro famiglie. Dal 2007 vengono invitati anche i nonni.
						</p>
						<p>
							Il vuoto lasciato da don Alberto Chiadò viene colmato dall'arrivo di <strong
								>don Giuseppe Sotgiu</strong
							>, nuovo viceparroco.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Dal 1995 la comunità si attiva in assemblee straordinarie, iniziative culturali, Messa
							per ammalati, catechesi, Corsi per animatori del Vangelo e Gruppi del Vangelo.
						</p>
						<p>
							Nel 2001 diventa viceparroco <strong>don Roberto Gottardo</strong>. Dal 2002 seguono
							iniziative per famiglie, periodico parrocchiale e visite pastorali.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/foto4.JPG" alt="Attività comunità" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="immagine">
						<img src="{base}/img/chi-siamo/immagine6.jpg" alt="Attività parrocchiale" />
					</div>
					<div class="testo">
						<p>
							Negli anni 2004-2014 proseguono attività culturali, corsi, missioni, gruppi giovani,
							feste parrocchiali, visite del vescovo Nosiglia e ordini diaconali. Nel 2014 la
							comunità saluta don Romolo, che diventa rettore del Santuario di Cristo Re.
						</p>
					</div>
				</div>
			</div>
		</section>

		<section id="dpiero" class="blocco-storia">
			<div class="pallino"></div>
			<div class="contenuto">
				<h2>Gli anni di don Piero (2014 a oggi)</h2>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Il 19 ottobre 2014 d. Piero fa il suo ingresso come parroco, con d. Roberto come
							Vicario episcopale.
						</p>
						<p>
							Il titolo della festa di quest'anno è <strong>La fede è bellezza</strong>.
						</p>
					</div>
					<div class="immagine">
						<img src="{base}/img/chi-siamo/P1210355.jpg" alt="Ingresso don Piero" />
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="testo">
						<p>
							Nell'ottobre 2015, in occasione della Festa Parrocchiale dal titolo <strong
								>Pensare in grande: il coraggio della fede</strong
							>, si tiene la prima edizione della <strong>StraNatale</strong>, una passeggiata per
							il quartiere con giochi e indovinelli.
						</p>
						<p>
							Nell'aprile 2016 la parrocchia accoglie tre migranti Munir, Francis e Adam, che grazie
							soprattutto ai giovani riescono ad integrarsi nella comunità.
						</p>
					</div>
				</div>

				<div class="storia-riga sinistra">
					<div class="testo">
						<p>
							Nel 2016 si attua per la prima volta la 24 ore di adorazione e preghiera, e nella
							quaresima una raccolta di prodotti per l'igiene personale per i carcerati.
						</p>
						<p>Nel 2017 si festeggiano i 50 anni della Parrocchia.</p>
						<p>
							Durante il 2020, a causa della pandemia di Coronavirus e del lockdown (9-3 al 16-5),
							la parrocchia organizza iniziative online per tutta la comunità, giovani, ragazzi e
							bambini.
						</p>
					</div>
				</div>

				<div class="storia-riga destra">
					<div class="testo">
						<p>
							Il 4 settembre 2022, con una grande festa e pranzo comunitario in cortile, salutiamo
							don Alberto che l'11 settembre fa il suo ingresso come parroco nella parrocchia Regina
							Mundi di Nichelino.
						</p>
						<p>
							Il 10 giugno 2023 viene ordinato prete Fabio Barotto, che da un anno presta servizio
							nella nostra parrocchia, riportando la figura del viceparroco.
						</p>
					</div>
				</div>
			</div>
		</section>
	</main>

	<section class="citazione-finale">
		<blockquote>“La nostra storia è un tesoro da custodire e tramandare con amore.”</blockquote>
	</section>
</div>

<style>
	.pagina-storia {
		max-width: 1100px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
		font-family: 'Roboto', sans-serif;
		color: #333;
		line-height: 1.7;
	}

	.header-storia {
		position: relative;
		width: 99.7vw;
		margin-left: calc(-50vw + 50%);
		height: calc(100vh - 5rem);
		overflow: hidden;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin-top: -5rem;
		padding-top: 0;
	}

	.sfondo-header {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: 0;
	}

	.header-storia::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5); /* Sovrapposizione scura */
		z-index: 1;
	}

	.contenuto-header {
		position: relative;
		z-index: 2;
		color: #fff;
		padding: 2rem;
		text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
	}

	.contenuto-header h1 {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.contenuto-header p {
		font-size: 1.2rem;
		font-style: italic;
	}

	.timeline-storia {
		position: relative;
		margin: 2rem 0;
		padding-left: 2rem;
		border-left: 3px solid #ddd;
	}

	.blocco-storia {
		position: relative;
		margin-bottom: 3rem;
		padding-left: 2rem;
	}

	.pallino {
		position: absolute;
		left: -1.15rem;
		top: 0.5rem;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		box-shadow: 0 0 0 4px #fff;
		background-color: #fecc00;
	}

	.contenuto h2 {
		font-size: 1.6rem;
		margin-bottom: 0.8rem;
		color: #fecc00;
	}

	.contenuto p {
		margin-bottom: 0.8rem;
		color: #444;
		text-align: justify;
	}

	.torna {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		background: #fecb00d0;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 15px;
		text-decoration: none;
		font-weight: bold;
		opacity: 0;
		transition:
			opacity 0.4s,
			transform 0.3s,
			background 0.3s;
		transform: translateY(20px);
		z-index: 1000;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	}

	.torna.show {
		opacity: 1;
		pointer-events: auto;
		transform: translateY(0);
	}

	.torna:hover {
		background: #fecc00;
	}

	/* Layout alternato testo-immagine */
	.storia-riga {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		margin: 2rem 0;
	}

	.storia-riga.sinistra .testo {
		order: 1;
	}
	.storia-riga.sinistra .immagine {
		order: 2;
	}

	.storia-riga.destra .immagine {
		order: 1;
	}
	.storia-riga.destra .testo {
		order: 2;
	}

	.storia-riga .testo {
		flex: 1;
		color: #444;
	}

	.storia-riga .immagine {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.storia-riga .immagine img {
		width: 100%;
		height: 300px;
		object-fit: cover;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	/* Citazione finale */
	.citazione-finale {
		text-align: center;
		background: linear-gradient(135deg, #f8f9fa, #e9ecef);
		padding: 3rem 2rem;
		border-radius: 12px;
		margin-top: 5rem;
	}

	blockquote {
		font-size: 1.4rem;
		font-style: italic;
		color: #555;
		max-width: 600px;
		margin: 0 auto;
		position: relative;
	}

	blockquote::before,
	blockquote::after {
		content: '“';
		font-size: 3rem;
		color: #026798;
		position: absolute;
		opacity: 0.8;
	}

	blockquote::before {
		top: -25px;
		left: -25px;
	}

	blockquote::after {
		content: '”';
		bottom: -25px;
		right: -25px;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.pagina-storia {
			padding: 2rem 1rem;
		}

		.header-storia {
			height: 40vh;
			flex-direction: column;
			padding: 0;
			width: 100vw;
			margin-left: -3rem;
			margin-right: 0;
		}

		.sfondo-header {
			width: 100vw;
			height: 50vh;
			object-fit: cover;
			display: block;
		}

		.contenuto-header {
			padding: 2rem 1rem;
		}

		.contenuto-header h1 {
			font-size: 2rem;
			margin-bottom: 0.5rem;
		}

		.contenuto-header p {
			font-size: 1rem;
		}

		/* Timeline */
		.timeline-storia {
			padding-left: 0;
			border-left: none;
		}

		.blocco-storia {
			padding-left: 0;
			margin-bottom: 2rem;
		}

		.contenuto h2 {
			font-size: 1.4rem;
			margin-bottom: 0.6rem;
		}

		.contenuto p {
			font-size: 1rem;
		}

		.storia-riga {
			flex-direction: column;
			gap: 1rem;
		}

		.storia-riga .testo {
			order: 1 !important;
			width: 100%;
		}

		.storia-riga .immagine {
			order: 2 !important;
			width: 100%;
		}

		.storia-riga .immagine img {
			width: 100%;
			height: auto;
			max-height: 300px;
			object-fit: cover;
			border-radius: 8px;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		}

		/* Pulsante torna su */
		.torna {
			bottom: 1.5rem;
			right: 1.5rem;
			padding: 0.4rem 0.8rem;
			font-size: 0.85rem;
		}

		/* Citazione finale */
		.citazione-finale {
			padding: 2rem 1rem;
			margin-top: 3rem;
		}

		blockquote {
			font-size: 1.2rem;
		}
	}
</style>
