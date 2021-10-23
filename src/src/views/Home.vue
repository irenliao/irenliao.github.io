<template>
	<section id="home">
		<Ratio ratio="57%">
			<iframe width="100%" height="100%" src="https://xd.adobe.com/embed/26be343e-feb2-42ef-bcd2-03df972b75d5-73ed/" frameborder="0" allowfullscreen></iframe>
		</Ratio>
		<img src="../assets/imac.png">
	</section>
</template>

<script>
import Ratio from "../components/Ratio.vue";
export default {
	components: {
		Ratio
	},
}
</script>

<style lang="scss" scoped>
#home {
	position: relative;
	.ratio {
		position: absolute;
		top: 37%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 92%;
		max-width: 915px;
		iframe {
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
	}
	img {
		width: 1000px;
		margin: auto;
	}
}
</style>