<script setup>

	onMounted(() => {
		useSmoothScroll()
	})

</script>
<template>

	<div id="viewport">
		<ThePreloader />
		<slot />
	</div>


</template>
<style lang='scss' scoped>

</style>