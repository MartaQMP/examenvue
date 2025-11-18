<template>
	<div id="div1">
		<h1 id="titulo">Bienvenido</h1>
		<div style="display: flex; flex-wrap: wrap; gap: 10px">
			<div v-for="cubo in cubos" :key="cubo" class="card" style="flex-grow: 1; max-width: 150px">
				<img :src="cubo.imagen" class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">{{ cubo.nombre }}</h5>
					<p class="card-text">{{ cubo.marca }} {{ cubo.modelo }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CubosService from "@/services/CubosService";

const service = new CubosService();
export default {
	name: "HomeComponent",
	data() {
		return {
			cubos: [],
		};
	},
	mounted() {
		service.getCubos().then(result => {
			this.cubos = result;
		});
	},
};
</script>

<style scoped></style>
