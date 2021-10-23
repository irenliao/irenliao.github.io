<template>
	<div class="ratio">
		<div class="ratio-outer-wrapper" :style="{ paddingTop }">
			<div class="ratio-inner-wrapper">
				<slot />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ["ratio"],
	data() {
		return {
			list: {
				square: "100%",
				youtube: "56.25%",
			}
		}
	},
	computed: {
		paddingTop() {
			return this.list[this.ratio] || this.ratio;
		}
	}
}
</script>

<style lang="scss" scoped>
.ratio {
	max-width: 100%;
	overflow: hidden;

	.ratio-outer-wrapper {
		width: 100%;
		position: relative;
		padding-top: 56.25%;
	}

	.ratio-inner-wrapper {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
	}
}
</style>