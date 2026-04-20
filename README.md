# Parrocchia Natale del Signore - SPA React

Single Page Application realizzata con React + Vite per la Parrocchia Natale del Signore (Torino, Via Boston 37).

## Requisiti

- Node.js 20+
- npm 10+

## Installazione

1. Installa le dipendenze:

```bash
npm install
```

2. Avvia il server di sviluppo:

```bash
npm run dev
```

3. Build di produzione:

```bash
npm run build
```

4. Preview locale della build:

```bash
npm run preview
```

## Stack tecnico

- React
- React Router DOM
- Vite
- CSS puro (senza framework UI)

## Deploy su GitHub Pages

### 1) Installa gh-pages

```bash
npm install --save-dev gh-pages
```

### 2) Configura base path in vite.config.js

Nel progetto è già impostato:

```js
base: '/nataledelsignore/'
```

Se il nome del repository è diverso, modifica con:

```js
base: '/nome-repo/'
```

### 3) Aggiungi script in package.json

Sono già presenti:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### 4) Esegui il deploy

```bash
npm run deploy
```

### 5) Configura GitHub Pages

In GitHub:

- Settings
- Pages
- Build and deployment: `GitHub Actions`

Il workflow è in `.github/workflows/deploy-pages.yml` e pubblica la cartella `dist`.

## Dominio personalizzato (CNAME)

Per usare un dominio personalizzato:

1. Crea un file `CNAME` dentro la cartella `public/`
2. Inserisci nel file solo il dominio, ad esempio:

```txt
www.tuodominio.it
```

3. Ricostruisci e ridistribuisci:

```bash
npm run deploy
```

## Note

- Le immagini sono state impostate con placeholder e commenti TODO per la sostituzione con asset reali.
- Il routing client-side è gestito da React Router.
- È incluso lo Scroll To Top a ogni cambio pagina.
