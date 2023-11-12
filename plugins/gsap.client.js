export default defineNuxtPlugin(async () => {
	if (process.client) {
		gsap.registerPlugin(ScrollTrigger)
	}
})




