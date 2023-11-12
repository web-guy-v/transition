export function useAnimateImage(el) {
	const element = (typeof el === 'string') ? document.querySelector(el) : el

	const tl = gsap.timeline()

	if(element) {
		tl.set(element, {
			overflow: 'hidden',
			pointerEvents: 'none'
		})

		tl.fromTo(element, {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
		}, {
			transition: 'unset',
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			duration: 0.7,
			delay: 0.1,
			clearProps: 'all'
		})

		tl.fromTo(element.querySelector("img"), {
			scale: 1.5
		}, {
			scale: 1,
			transition: 'unset',
			duration: 0.7,
			clearProps: 'all'
		}, 0)
	}

	return tl
}
