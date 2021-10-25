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
		next() {
			switch (this.scenario) {
				case "scenario2":
					return "/introduction/2";
				default:
					return "/scenario/scenario1";
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.$refs["video"].addEventListener("ended", e => {
				this.$router.push(this.next);
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