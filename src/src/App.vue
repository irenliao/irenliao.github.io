<template>
	<section id="app">
		<Ratio ratio="56.5%">
			<transition name="fade" mode="out-in">
				<router-view style="width:100%; height:100%; background:#fff;" />
			</transition>
		</Ratio>
		<img src="./assets/imac.png" width="100%">
	</section>
</template>

<script>
import Ratio from "./components/Ratio.vue";
export default {
	components: {
		Ratio
	},
}
</script>

<style lang="scss" scoped>
#app {
	background: #000;
	position: relative;
	.ratio {
		position: absolute;
		top: 33.5%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 70.5%;
	}
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}
</style>