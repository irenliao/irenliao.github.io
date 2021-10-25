<template>
	<section id="index">
		<router-link :to="next" style="width:100%; heigh:100%;">
			<img src="../assets/1.jpg" width="100%" height="100%">
		</router-link>
	</section>
</template>

<script>
export default {
	props: ["scenario"],
	computed: {
		next() {
			switch (this.scenario) {
				case "scenario2":
					return "/scenario/scenario2";
				default:
					return "/homescreen/scenario1";
			}
		}
	},
}
</script>