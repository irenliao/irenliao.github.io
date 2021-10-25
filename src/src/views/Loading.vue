<template>
	<section id="loading">
		<video ref="video" :src="src" muted autoplay />
	</section>
</template>

<script>
export default {
	props: ["scenario"],
	computed: {
		src() {
			return require(`../assets/video-${this.scenario}.mp4`);
		},
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs["video"].addEventListener("ended", e => {
				this.$router.push(`/scenario/${this.scenario}`);
			});
		})
	}
}
</script>

<style lang="scss" scoped>
video {
	display: block;
	width: 100%;
	height: 100%;
}
</style>