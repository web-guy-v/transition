export default defineNuxtRouteMiddleware((to, from) => {

	from.meta.pageTransition.onLeave = (el, done) => {
		general.isTransitionFinish = false
		general.isTransitionStart = false
		general.isTransitionStart = true
		general.scrollLenis.stop()

		let tl = gsap.timeline({
			onComplete() {
				gsap.set([
					el,
					el.querySelector('.page-wrap'),
					el.querySelector('.page-mask'),
					el.querySelector('.header')
				], {
					clearProps: 'all'
				})


				ScrollTrigger.getAll().filter(st => {
					if(st.trigger && st.trigger.closest(`.${from.name}`)) {
						st.kill()
					}
				})
				done()
			}
		})
		tl.set(el, {
			position: 'relative',
			zIndex: 2,
			pointerEvents: 'none'
		})

		tl.to(el.querySelector('.header'), {
			yPercent: -100,
			duration: 0.3,
		}, 0)

		tl.fromTo(el, {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
		}, {
			clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
			duration: 1
		}, 0)

		tl.to(el.querySelector('.page-wrap'), {
			xPercent: -20,
			duration: 1
		}, 0)

		tl.to(el.querySelector('.page-mask'), {
			opacity: 1,
			duration: 1
		}, 0)

	}
	to.meta.pageTransition.onEnter = (el, done) => {
		useChangePageBg()

		gsap.set(el, {
			position: 'fixed',
			top: 0,
			left: 0,
			width: '100%',
			pointerEvents: 'none'
		})


		let tl = gsap.timeline({
			onComplete() {
				gsap.set(el, {
					clearProps: 'all'
				})

				general.isTransitionFinish = true
				general.isTransitionStart = false
				general.scrollLenis.start()
				done()
			}
		})

		tl.from(el.querySelector('.page-wrap'), {
			xPercent: 50,
			duration: 1
		})
	}

})


