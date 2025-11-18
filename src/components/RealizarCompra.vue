<template>
	<div id="div1">
		<h1 id="titulo">Realizar Compra</h1>
		<form v-on:submit.prevent="hacerCompra()">
			<select class="form-select" v-model="elegido">
				<option v-for="cubo in cubos" :key="cubo" :value="cubo">{{ cubo.nombre }}</option>
			</select>
			<br />
			<button style="width: 100%" class="btn btn-success">Comprar Cubo</button>
		</form>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();
export default {
	name: "RealizarCompra",
	data() {
		return {
			cubos: [],
			token: "",
			elegido: "",
		};
	},
	mounted() {
		this.token = localStorage.getItem("token");
		service.getCubos().then(result => {
			this.cubos = result;
		});
	},
	methods: {
		hacerCompra() {
			this.token = localStorage.getItem("token");
			service.realizarCompra(this.token, this.elegido).then(result => {
				console.log(result);
				this.$router.push("/compras");
			});
		},
	},
};
</script>

<style scoped></style>
