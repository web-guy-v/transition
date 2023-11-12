<script setup>

	const props = defineProps({
		text: String
	})

</script>
<template>

	<div class="title-default h1">
		<div class="title-default__wrap">
			{{ text }}
		</div>
	</div>

</template>
<style lang='scss' scoped>

.title-default {
	height: 100vh;
	height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
}
.title-default__wrap {
	will-change: transform;
}

</style>