import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/**
 * Hostinger serves the site from the domain root, so the default base is "/".
 * GitHub Pages serves it from /<repo>/, so CI sets BASE_PATH=/y/ for that
 * build. Everything else reads import.meta.env.BASE_URL, so one codebase
 * deploys to either without edits.
 */
const base = process.env.BASE_PATH ?? '/'

/**
 * A static host has no router, so a direct hit on /en is a 404. Apache gets
 * .htaccess and Netlify gets _redirects; GitHub Pages has neither, but it does
 * serve 404.html for unknown paths — and if that file IS the app, the app boots
 * and its router takes over.
 */
function spaFallback() {
  return {
    name: 'spa-fallback-404',
    closeBundle() {
      const out = resolve(__dirname, 'dist')
      copyFileSync(resolve(out, 'index.html'), resolve(out, '404.html'))
    },
  }
}

export default defineConfig({
  base,
  plugins: [react(), spaFallback()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
