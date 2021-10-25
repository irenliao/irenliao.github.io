import Vue from "vue"
import VueRouter from "vue-router"
import Index from "./views/Index.vue"
import HomeScreen from "./views/HomeScreen.vue"
import Loading from "./views/Loading.vue"
import Scenario from "./views/Scenario.vue"
import Introduction from "./views/Introduction.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "/scenario1",
	},
	{
		path: "/homescreen/:scenario",
		component: HomeScreen,
		props: true,
	},
	{
		path: "/loading/:scenario",
		component: Loading,
		props: true,
	},
	{
		path: "/scenario/:scenario",
		component: Scenario,
		props: true,
	},
	{
		path: "/introduction/:screen",
		component: Introduction,
		props: true,
	},
	{
		path: "/:scenario",
		component: Index,
		props: true,
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
})

export default router
