import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // ✅ questo è l'import giusto

const dev = process.argv.includes('dev');

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',      // cartella dove verrà esportato il sito
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/nataledelsignore' // il nome del tuo repo GitHub Pages
    },
    appDir: 'app' // evita l'underscore "_app" che GitHub non serve
  },
  preprocess: vitePreprocess()
};

export default config;
