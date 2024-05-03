import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		proxy: {
			"/api": {
				target:
					"https://nodejs-api-react-node-js-my-sql-full-stack-blog-app-ft5n.vercel.app",
				secure: false,
			},
		},
	},
});
