export function useAnimateText(el) {
	const element = (typeof el === 'string') ? document.querySelector(el) : el

	const tl = gsap.timeline()

	if(element) {
		tl.from(element, {
			opacity: 0,
			y: 50,
			duration: 0.7,
			delay: 0.1
		})
	}

	return tl
}
