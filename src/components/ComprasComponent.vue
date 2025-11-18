<template>
	<div id="div1">
		<h1 id="titulo">Mis Compras</h1>
		<table class="table table-striped">
			<thead>
				<tr>
					<th>ID Compra</th>
					<th>ID Cubo</th>
					<th>Fecha Pedido</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="compra in compras" :key="compra">
					<td>{{ compra.idPedido }}</td>
					<td>{{ compra.idCubo }}</td>
					<td>{{ compra.fechaPedido }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();
export default {
	name: "ComprasComponent",
	data() {
		return {
			token: "",
			compras: [],
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		if (!this.token) {
			this.$router.push("/login");
		} else {
			service.verCompras(this.token).then(result => {
				this.compras = result;
			});
		}
	},
};
</script>

<style scoped></style>
