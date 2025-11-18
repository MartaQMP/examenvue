<template>
	<div>
		<nav class="navbar navbar-expand-lg bg-body-tertiary">
			<div class="container-fluid">
				<img src="../assets/logo.png" style="width: 75px" />
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavDropdown">
					<ul class="navbar-nav">
						<li class="nav-item">
							<router-link to="/" class="nav-link active" aria-current="page">Cubos</router-link>
						</li>
						<li class="nav-item dropdown">
							<p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Marcas</p>
							<ul class="dropdown-menu">
								<li v-for="marca in marcas" :key="marca">
									<router-link class="dropdown-item" :to="'/marca/' + marca">{{ marca }}</router-link>
								</li>
							</ul>
						</li>
						<li class="nav-item dropdown">
							<p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Seguridad</p>
							<ul class="dropdown-menu">
								<li v-if="!token" class="nav-item">
									<router-link class="dropdown-item" to="/login">Iniciar Sesion</router-link>
								</li>
								<li v-else class="nav-item">
									<button @click="cerrarSesion()" class="dropdown-item">Cerrar Sesion</button>
								</li>
							</ul>
						</li>
						<li v-if="token" class="nav-item dropdown">
							<p class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuario</p>
							<ul class="dropdown-menu">
								<li>
									<router-link class="dropdown-item" to="/perfil">Perfil</router-link>
								</li>
								<li>
									<router-link class="dropdown-item" to="/compras">Mis compras</router-link>
								</li>
								<li>
									<router-link class="dropdown-item" to="/realizarcompra">Realizar Compra</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();

export default {
	name: "MenuComponent",
	data() {
		return {
			marcas: [],
			token: localStorage.getItem("token"),
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		service.getMarcasCubos().then(result => {
			this.marcas = result;
		});
	},
	methods: {
		cerrarSesion() {
			localStorage.clear();
			this.token = "";
			this.$router.push("/");
		},
	},
};
</script>

<style scoped></style>
