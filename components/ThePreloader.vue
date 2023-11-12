<script setup>

	const percentage = ref(0)

	onMounted(() => {
		const tl = gsap.timeline()

		tl.to(percentage, {
			progress: 100,
			duration: 1,
			onUpdate() {
				percentage.value = Math.floor(percentage.progress)
			},
			onComplete() {
				general.isPreloaderVisible = false
			}
		})

		tl.fromTo('.preloader', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
		}, {
			clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
			duration: 1,
		})
	})

</script>
<template>

	<div class="preloader">
		<div class="preloader-percent h1">
			{{ percentage }}%
		</div>
	</div>

</template>
<style lang='scss' scoped>

.preloader {
	position: fixed;
	inset: 0;
	z-index: $z-preloader;
	display: flex;
	align-items: center;
	justify-content: center;
	background: $color-white;
	color: $color-black;
}

</style>