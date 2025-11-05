import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";
export default class Cl_vCatalogo extends Cl_vGeneral {
    constructor() {
        super({ formName: "negocios" });
        this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
            onclick: () => this.agregarProducto(),
        });
        this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
            type: tHTMLElement.CONTAINER,
            refresh: () => this.mostrarProductosRegistrados(),
        });
    }
    mostrarProductosRegistrados() {
        var _a;
        this.divProductosRegistrados.innerHTML = "";
        let Productos = (_a = this.controlador) === null || _a === void 0 ? void 0 : _a.ProductosRegistrados();
        if (!Productos)
            return;
        Productos.forEach((Producto) => {
            this.divProductosRegistrados.innerHTML += `<tr>
            <td>${Producto.id}</td>
            <td>${Producto.descripcion}</td>
            <td>${Producto.precioUnitario}</td>
           
        </tr>`;
        });
    }
    agregarProducto() {
        let id = prompt("Ingrese el ID del producto:");
        if (!id)
            return;
        let descripcion = prompt("Ingrese la descripcion del producto :");
        if (!descripcion)
            return;
        let precioUnitario = prompt("Ingrese el precio unitario del producto:");
        if (!precioUnitario)
            return;
        this.controlador.agregarProducto({
            ProductoData: {
                id: parseInt(id),
                descripcion: descripcion,
                precioUnitario: parseFloat(precioUnitario),
            },
            callback: (error) => {
                if (error)
                    alert(error);
                this.refresh();
            },
        });
    }
}
