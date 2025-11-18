import { Global } from "@/Global";
import axios from "axios";

export default class CubosService {
	getCubos() {
		return new Promise(function (resolve) {
			let request = "api/cubos";
			axios.get(Global.urlCubos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	getMarcasCubos() {
		return new Promise(function (resolve) {
			let request = "api/cubos/marcas";
			axios.get(Global.urlCubos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	getMarcaCubos(marca) {
		return new Promise(function (resolve) {
			let request = "api/cubos/cubosmarca/" + marca;
			axios.get(Global.urlCubos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	generarToken(usuario) {
		return new Promise(function (resolve) {
			let request = "api/manage/login";
			axios.post(Global.urlCubos + request, usuario).then(response => {
				localStorage.clear();
				localStorage.setItem("token", response.data.response);
				resolve(response.data);
			});
		});
	}
	verCompras(token) {
		return new Promise(function (resolve) {
			let request = "api/compra/comprasusuario";
			axios
				.get(Global.urlCubos + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}
	getCubosId(idcubo) {
		return new Promise(function (resolve) {
			let request = "api/cubos/" + idcubo;
			axios.get(Global.urlCubos + request).then(response => {
				resolve(response.data);
			});
		});
	}
	realizarCompra(token, cubo) {
		return new Promise(function (resolve) {
			let request = "api/compra/insertarpedido/" + cubo.idCubo;
			let data = JSON.stringify(cubo);
			axios
				.post(Global.urlCubos + request, data, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response);
				});
		});
	}
	getPerfil(token) {
		return new Promise(function (resolve) {
			let request = "api/manage/perfilusuario";
			axios
				.get(Global.urlCubos + request, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then(response => {
					resolve(response.data);
				});
		});
	}
}
