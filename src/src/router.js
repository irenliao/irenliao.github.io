import Vue from "vue"
import VueRouter from "vue-router"
import Home from "./views/Home.vue"
import Situation from "./views/Situation.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/situation/:id",
		name: "Situation",
		component: Situation
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
