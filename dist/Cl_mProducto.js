export default class Cl_mProducto {
    constructor(id, descripcion, precioUnitario) {
        this._id = 0;
        this._descripcion = "";
        this._precioUnitario = 0;
        this.id = id;
        this.descripcion = descripcion;
        this.precioUnitario = precioUnitario;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return this._id;
    }
    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }
    get descripcion() {
        return this._descripcion;
    }
    set precioUnitario(precioUnitario) {
        this._precioUnitario = precioUnitario;
    }
    get precioUnitario() {
        return this._precioUnitario;
    }
    error() {
        if (this.id <= 0)
            return `El id debe ser un número entero positivo (mayor a cero)`;
        if (this.descripcion.trim().length < 3)
            return `La descripción del producto debe tener una longitud mínima de 3 caracteres.`;
        if (this.precioUnitario <= 0)
            return `El Precio Unitario debe ser un valor numérico mayor estricto a cero (e.g., $0.01 o más)`;
        return false;
    }
    toJSON() {
        return {
            id: this.id,
            descripcion: this.descripcion,
            precioUnitario: this.precioUnitario,
        };
    }
}
