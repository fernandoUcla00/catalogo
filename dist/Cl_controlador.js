import Cl_mProducto from "./Cl_mProducto.js";
export default class Cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    agregarProducto({ ProductoData, callback, }) {
        this.modelo.agregarProducto({
            producto: new Cl_mProducto(ProductoData.id, ProductoData.descripcion, ProductoData.precioUnitario),
            callback: (error) => {
                callback(error);
            },
        });
    }
    ProductosRegistrados() {
        return this.modelo.listar();
    }
}
