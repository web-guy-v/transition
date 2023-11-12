<script setup>

	const props = defineProps({
		title: String,
		pageName: String,
	})

	watch(() =>
		[general.isTransitionStart, general.isPreloaderVisible],
		([transitionStart, preloaderVisibility]) => {

		if(transitionStart && !preloaderVisibility) {
			firstScreenAnimation({parent: `.${props.pageName}`})
		}
	})


</script>
<template>

	<div :class="`page ${props.pageName}`">
		<TheHeader />

		<div class="page-wrap _container">

			<PageMask />
			<TheTitle :text="props.title" />
			<slot />
		</div>
	</div>

</template>
<style lang='scss' scoped>

._container {
	width: 100%;
	padding-left: 32px;
	padding-right: 32px;
}


</style>