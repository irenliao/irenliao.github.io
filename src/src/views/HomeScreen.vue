<template>
	<section id="home-screen">
		<img src="../assets/homepage.png" width="100%" height="100%">
		<router-link :to="`/loading/${scenario}`">
			<img src="../assets/app-logo.png" width="100%">
		</router-link>
	</section>
</template>

<script>
export default {
	props: ["scenario"],
}
</script>

<style lang="scss" scoped>
#home-screen {
	position: relative;
	a {
		position: absolute;
		top: 45%;
		left: 50%;
		width: 5%;
		border-radius: 8px;
		overflow: hidden;
		transform: translate(-50%, -50%);
	}
}
</style>