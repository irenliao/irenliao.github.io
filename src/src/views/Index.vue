<template>
	<section id="index">
		<router-link :to="`/homescreen/${scenario}`" style="width:100%; heigh:100%;">
			<img src="../assets/1.jpg" width="100%" height="100%">
		</router-link>
	</section>
</template>

<script>
export default {
	props: ["scenario"],
}
</script>