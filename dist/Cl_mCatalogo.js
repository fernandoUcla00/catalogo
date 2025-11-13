export default class Cl_mCatalogo {
    constructor() {
        this.productos = [];
    }
    agregarProducto({ producto, callback, }) {
        // Validar id de grupo repetido
        const idRepetido = this.productos.find((p) => p.id === producto.id);
        if (idRepetido) {
            callback(`El producto con el ID ${producto.id} ya existe`);
            return;
        }
        // Validar producto
        const errorProducto = producto.error();
        if (errorProducto) {
            callback(errorProducto);
            return;
        }
        this.productos.push(producto);
        localStorage.setItem("catalogo", JSON.stringify(this.listar()));
        callback(false);
    }
    listar() {
        return this.productos.map((p) => p.toJSON());
    }
}
