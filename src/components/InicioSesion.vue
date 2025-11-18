<template>
	<div>
		<form v-on:submit.prevent="generarToken()">
			<label class="form-label">Email:</label>
			<input class="form-control" type="text" v-model="usuario.email" />
			<label class="form-label">Password:</label>
			<input class="form-control" type="text" v-model="usuario.password" />
			<br />
			<button class="btn btn-secondary" style="margin-right: 5%">Inicio Sesion</button>
		</form>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();
export default {
	name: "InicioSesion",
	data() {
		return {
			usuario: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		generarToken() {
			service.generarToken(this.usuario).then(result => {
				console.log(result);
				this.$router.push("/").then(()=>window.location.reload());
			});
		},
	},
};
</script>

<style scoped></style>
