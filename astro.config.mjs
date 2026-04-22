// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://julienklein20-cmd.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});