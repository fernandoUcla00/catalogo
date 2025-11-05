import Cl_mProducto, { IProducto } from "./Cl_mProducto.js";
 export default class Cl_mCatalogo {
    private productos: Cl_mProducto[] = [];
    agregarProducto({
    producto,
    callback,
  }: {
    producto: Cl_mProducto;
    callback: (error: string | false) => void;
  }): void {
    // Validar id de grupo repetido
    const idRepetido = this.productos.find(
      (p) => p.id === producto.id
    );
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
    callback(false);
  }
    listar(): IProducto[] {
    return this.productos.map((p) => p.toJSON());
    }
 }