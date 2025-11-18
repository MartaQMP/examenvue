<template>
	<div id="div1">
		<h1 id="titulo1">Cubos Marca {{ marca }}</h1>
		<div style="display: flex; flex-wrap: wrap; gap: 10px">
			<div v-for="cubo in cubosMarca" :key="cubo" class="card" style="flex-grow: 1; max-width: 150px">
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
	name: "MarcasComponent",
	data() {
		return {
			marca: "",
			cubosMarca: [],
		};
	},
	mounted() {
		this.marca = this.$route.params.marca;
		service.getMarcaCubos(this.marca).then(result => {
			this.cubosMarca = result;
		});
	},
	watch: {
		"$route.params.marca"(oldVal, nextVal) {
			if (oldVal !== nextVal) {
				this.marca = this.$route.params.marca;
				service.getMarcaCubos(this.marca).then(result => {
					this.cubosMarca = result;
				});
			}
		},
	},
};
</script>

<style scoped></style>
