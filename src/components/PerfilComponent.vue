<template>
	<div id="div1">
		<h1 id="titulo">Perfil</h1>
		<table v-if="perfil" class="table table-striped">
			<thead>
				<tr>
					<th>ID Usuario</th>
					<th>Nombre</th>
					<th>Email</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>{{ perfil.idUsuario }}</td>
					<td>{{ perfil.nombre }}</td>
					<td>{{ perfil.email }}</td>
				</tr>
			</tbody>
		</table>
		<router-link to="/compras" class="btn btn-warning">Mostrar Compras</router-link>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();
export default {
	name: "PerfilComponent",
	data() {
		return {
			perfil: null,
			token: "",
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		service.getPerfil(this.token).then(result => {
			this.perfil = result;
		});
	},
};
</script>

<style scoped></style>
