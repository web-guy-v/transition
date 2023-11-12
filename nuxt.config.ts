export default defineNuxtConfig({
	pages: true,
	css: [
		'@/assets/scss/default.scss',
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/utils.scss";'
				}
			}
		},
	},
	imports: {
		dirs: ['store', 'utils', 'animations'],
	},
})
