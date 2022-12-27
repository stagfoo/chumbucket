import { viteSingleFile } from "vite-plugin-singlefile"
import { defineConfig } from "vite"
// vite.config.js
export default defineConfig({
	plugins: [viteSingleFile()],
})