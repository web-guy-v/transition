<script setup>

	definePageMeta(transition)

	watch(() =>
		[general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {

		if(transitionFinish && !preloaderVisibility) {
			contentAnimation({type: 'text', element: '.page-content__block'})
		}
	})


</script>
<template>

	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			page-name="about"
			title="About"
		>

			<div class="page-content">
				<div
					v-for="_ in 10"
					class="page-content__block p1"
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi.
				</div>
			</div>

		</NuxtLayout>
	</div>

</template>
<style lang='scss' scoped>

.page-content__block {
	padding-bottom: 32px;
}

</style>