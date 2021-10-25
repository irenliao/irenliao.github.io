<template>
	<section id="scenario">
		<iframe width="100%" height="100%" :src="`https://xd.adobe.com/embed/${id}/?fullscreen`" frameborder="0" allowfullscreen></iframe>
		<router-link :to="next">Next Screen</router-link>
	</section>
</template>

<script>
export default {
	props: ["scenario"],
	computed: {
		id() {
			switch (this.scenario) {
				case "scenario1":
					return "5f4801e5-f707-42a7-b905-b1ecb7cb33b6-0a1b";
				case "scenario2":
					return "afd77ab2-03c5-4a64-a6b0-51f9b3a86847-fa84";
				default:
					alert("404");
					break;
			}
		},
		next() {
			switch (this.scenario) {
				case "scenario2":
					return "/loading/scenario2";
				default:
					return "/introduction/2";
			}
		}
	}
}
</script>

<style lang="scss" scoped>
#scenario {
	// display: flex;
	// flex-direction: column;
	position: relative;
	iframe {
		width: 100%;
		height: 100%;
		// flex: 1;
	}
	a {
		// align-self: flex-end;
		position: absolute;
		right: 0;
		bottom: 0;
		padding: 1px 3px;
		font-size: 10px;
		background: rgb(109, 186, 243);
		color: #fff;
		text-align: center;
	}
}
</style>