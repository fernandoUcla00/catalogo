import { IProducto } from "./Cl_mProducto.js";
import Cl_vGeneral, { tHTMLElement } from "./tools/Cl_vGeneral.js";

export default class Cl_vCatalogo extends Cl_vGeneral {
  private btAgregarProducto: HTMLButtonElement;
  private divProductosRegistrados: HTMLDivElement;
  constructor() {
    super({ formName: "negocios" });
    this.btAgregarProducto = this.crearHTMLButtonElement("btAgregarProducto", {
      onclick: () => this.agregarProducto(),
    });
    this.divProductosRegistrados = this.crearHTMLElement("divProductosRegistrados", {
      type: tHTMLElement.CONTAINER,
      refresh: () => this.mostrarProductosRegistrados(),
    }) as HTMLDivElement;
  }
  mostrarProductosRegistrados() {
    this.divProductosRegistrados.innerHTML = "";
    let Productos = this.controlador?.ProductosRegistrados();
    if (!Productos) return;
    Productos.forEach((Producto: IProducto) => {
      this.divProductosRegistrados.innerHTML += `<tr>
            <td>${Producto.id}</td>
            <td>${Producto.descripcion}</td>
            <td>${Producto.precioUnitario}</td>
           
        </tr>`;
    });
  }
  agregarProducto() {
    let id = prompt("Ingrese el ID del producto:");
    if (!id) return;
    let descripcion = prompt("Ingrese la descripcion del producto :");
    if (!descripcion) return;
    let precioUnitario = prompt("Ingrese el precio unitario del producto:");
    if (!precioUnitario) return;
    
    this.controlador!.agregarProducto({
      ProductoData: {
        id: parseInt(id),
        descripcion: descripcion,
        precioUnitario: parseFloat(precioUnitario),
      },
      callback: (error: string | false) => {
        if (error) alert(error);
        this.refresh();
      },
    });
  }
}
