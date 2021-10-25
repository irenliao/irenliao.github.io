<template>
	<section id="introduction">
		<router-link :to="`/introduction/${next}`" style="width:100%; heigh:100%;">
			<img :src="src" width="100%" height="100%">
		</router-link>
	</section>
</template>

<script>
export default {
	props: ["screen"],
	computed: {
		next() {
			const num = Number(this.screen);
			return num && num < 5 ? num + 1 : num;
		},
		src() {
			return require(`../assets/${this.screen}.jpg`);
		},
	}
}
</script>