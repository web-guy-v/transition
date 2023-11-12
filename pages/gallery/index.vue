<script setup>

	definePageMeta(transition)

	watch(() =>
		[general.isTransitionFinish, general.isPreloaderVisible],
		([transitionFinish, preloaderVisibility]) => {

		if(transitionFinish && !preloaderVisibility) {
			contentAnimation({type: 'image', element: '.page-content__photo'})
		}
	})

</script>
<template>

	<div :class="general.pageBg">
		<NuxtLayout
			name="custom"
			page-name="gallery"
			title="gallery"
		>

			<div class="page-content">
				<nuxt-link
					v-for="(_, i) in 10"
					class="page-content__photo hover-image"
					:to="`/gallery/${i+1}`"
				>
					<img src="/photo.jpeg" alt="">
				</nuxt-link>
			</div>

		</NuxtLayout>
	</div>

</template>
<style lang='scss' scoped>

.page-content {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 10px;
	align-items: flex-start;
}

</style>