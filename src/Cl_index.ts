/**
 * Ejercicio: Catálogo de Productos
El objetivo es implementar una Micro App que registre productos y permita listarlos,
aplicando las validaciones solicitadas. Se registra cada producto con id, descripción,
precio unitario, id, Descripción y Precio Unitario no pueden ser nulos ni cadenas vacías,
El id debe ser un número entero positivo (mayor a cero),  el Precio Unitario debe ser un valor numérico mayor estricto a cero (e.g., $0.01 o más), 
la descripción del producto debe tener una longitud mínima de 3 caracteres.
El id del producto a agregar no debe existir previamente en el arreglo interno (_productos).
 */
import Cl_controlador from "./Cl_controlador.js";
import Cl_mCatalogo from "./Cl_mCatalogo.js";
import Cl_vCatalogo from "./Cl_vCatalogo.js";

export default class Cl_index {
  public modelo: Cl_mCatalogo;
  public vista: Cl_vCatalogo;
  constructor() {
    this.modelo = new Cl_mCatalogo();
    this.vista = new Cl_vCatalogo();
    let controlador = new Cl_controlador(this.modelo, this.vista);
    this.vista.controlador = controlador;
    this.vista.refresh();
  }
}