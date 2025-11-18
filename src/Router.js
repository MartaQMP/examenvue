import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import MarcasComponent from "./components/MarcasComponent.vue";
import InicioSesion from "./components/InicioSesion.vue";
import ComprasComponent from "./components/ComprasComponent.vue";
import RealizarCompra from "./components/RealizarCompra.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const myRoutes = [
	{ path: "/", component: HomeComponent },
	{ path: "/login", component: InicioSesion },
	{ path: "/perfil", component: PerfilComponent },
	{ path: "/compras", component: ComprasComponent },
	{ path: "/marca/:marca", component: MarcasComponent },
	{ path: "/realizarcompra", component: RealizarCompra },
];

const router = createRouter({
	history: createWebHistory(),
	routes: myRoutes,
});

export default router;
