import Cl_mProducto, { IProducto } from "./Cl_mProducto.js";
import Cl_mCatalogo from "./Cl_mCatalogo.js";
import Cl_vCatalogo from "./Cl_vCatalogo.js";

export default class Cl_controlador {
  public modelo: Cl_mCatalogo;
  public vista: Cl_vCatalogo;
  constructor(modelo: Cl_mCatalogo, vista: Cl_vCatalogo) {
    this.modelo = modelo;
    this.vista = vista;
  }
  agregarProducto({
    ProductoData,
    callback,
  }: {
    ProductoData: IProducto;
    callback: Function;
  }): void {
    this.modelo.agregarProducto({
      producto: new Cl_mProducto(
        ProductoData.id,
        ProductoData.descripcion,
        ProductoData.precioUnitario
      ),
      callback: (error: string | false) => {
        callback(error);
      },
    });
  }
  ProductosRegistrados(): IProducto[] {
    return this.modelo.listar();
  }
}
