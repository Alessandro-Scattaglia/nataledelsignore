const albumStorici = [
  { data: "Quaresima 2020", titolo: "Quaresima 2020", path: "album/quaresima2020/index.html" },
  {
    data: "25 febbraio 2017",
    titolo: "Festa di Carnevale dell'oratorio",
    path: "album/festa_carnevale_oratorio2017/index.html",
  },
  {
    data: "6 novembre 2016",
    titolo: "Ritiro Consiglio Pastorale Parrocchiale",
    path: "album/ritiro CPP.htm",
  },
  {
    data: "10 aprile 2016",
    titolo: "Anniversari Matrimonio",
    path: "album/anniversari_matrimonio2016/festa.html",
  },
  {
    data: "18-20 ottobre 2013",
    titolo: "Festa patronale",
    path: "album/festa_patronale2013/festa2013.html",
  },
  { data: "6-4-2012", titolo: "Festa dei battezzati", path: "album/battesimi2012/battesimo.htm" },
  { data: "14-10-2012", titolo: "Festa patronale", path: "album/festa_patronale2012/festa.htm" },
  { data: "14-4-2012", titolo: "Festa dei battezzati", path: "album/battesimi2011/battesimo.htm" },
  {
    data: "2011",
    titolo: "Pellegrinaggio in Giordania",
    path: "album/pellegrinaggio_giordania_2011/foto_giordania.htm",
  },
  {
    data: "2011",
    titolo: "Pellegrinaggio a Mantova",
    path: "album/pellegrinaggio_mantova_2011/foto_mantova.htm",
  },
  {
    data: "5-3-2011",
    titolo: "Festa di carnevale dell'oratorio",
    path: "album/festa_carnevale_oratorio2011/festa.htm",
  },
  {
    data: "24-2-2011",
    titolo: "Festa anniversari di matrimonio",
    path: "album/anniversari_matrimonio2011/festa.htm",
  },
  { data: "13-1-2011", titolo: "Festa dei battezzati", path: "album/battesimi2010/battesimo.htm" },
  { data: "17-10-2010", titolo: "Festa patronale", path: "album/festa_patronale2010/festa.htm" },
  {
    data: "2010",
    titolo: "Pellegrinaggio a Santiago de Compostela",
    path: "album/pellegrinaggio_santiago_2010/santiago.htm",
  },
  {
    data: "3-10-2009",
    titolo: "Gita a Valdocco del gruppo cresimandi",
    path: "album/cresimandi2009/uscita_cresimandi_2009.htm",
  },
  {
    data: "maggio 2009",
    titolo: "Recita I postini di Paolo",
    path: "album/postini_paolo/postini_paolo.htm",
  },
  { data: "10-1-2009", titolo: "Festa dei battezzati", path: "album/battesimi2009/battesimo.htm" },
  { data: "12-1-2008", titolo: "Festa dei battezzati", path: "album/battesimi2007/battesimo.htm" },
  { data: "14-10-2007", titolo: "Festa per il quarantennio", path: "album/quarantennio/festa.htm" },
  { data: "2007", titolo: "Bousson 2007, campo giovani", path: "album/bousson2007/bousson07.htm" },
  {
    data: "1-10-2006",
    titolo: "Gita con i cresimandi",
    path: "album/cresimandi2006/uscita_cresimandi_2006.htm",
  },
  { data: "2006", titolo: "Noli 2006, campo estivo", path: "album/noli2006/noli.htm" },
  {
    data: "13-11-2005",
    titolo: "Gita a Noli del gruppo giovani",
    path: "album/noli/noli.htm",
  },
  { data: "2005", titolo: "Giornata Mondiale della Gioventù", path: "album/gmg2005/gmg2005.htm" },
  {
    data: "2005",
    titolo: "Bousson 2005, campo terza media e prima superiore",
    path: "album/bousson2005/bousson05.htm",
  },
  { data: "17-4-2005", titolo: "Gita al lago d'Orta", path: "album/lago_orta/lago_orta.htm" },
  { data: "7-4-2005", titolo: "Pellegrinaggio a Roma", path: "album/roma/roma.htm" },
  {
    data: "10-10-2004",
    titolo: "Gita con i cresimandi",
    path: "album/cresimandi2004/uscita_cresimandi_2004.htm",
  },
  { data: "2004", titolo: "Bousson 2004, campo terza media", path: "album/bousson2004/bousson.htm" },
  { data: "2004", titolo: "Mostra La Parrocchia si racconta", path: "album/mostra/mostra.htm" },
  { data: "2004", titolo: "Visita pastorale del vescovo", path: "album/visita pastorale/foto_visita_pastorale.htm" },
  {
    data: "24-12-1974",
    titolo: "Dedicazione della chiesa",
    path: "album/dedicazione/foto_dedicazione.htm",
  },
  { data: "Storico", titolo: "Kibao, parrocchia gemellata", path: "album/kibao/kibao.htm" },
  { data: "2004", titolo: "I bimbi di Vo' Jurema", path: "jurema_2004.htm" },
];

function Album() {
  return (
    <article className="page">
      <header className="page-hero page-hero-album">
        <div>
          <p className="eyebrow">Memoria fotografica</p>
          <h2>Album fotografico storico</h2>
          <p>
            Elenco degli album storici della comunità. I percorsi indicati fanno riferimento all'archivio legacy.
          </p>
        </div>
      </header>

      <section className="album-list">
        {albumStorici.map((album) => (
          <article className="plain-card" key={`${album.data}-${album.titolo}`}>
            <p className="small-muted">{album.data}</p>
            <h3>{album.titolo}</h3>
            <p>
              Link storico: <a href={album.path}>{album.path}</a>
            </p>
          </article>
        ))}
      </section>
    </article>
  );
}

export default Album;
