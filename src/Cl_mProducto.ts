export  interface IProducto {
    id: number;
    descripcion: string;
    precioUnitario: number;
}
export default class Cl_mProducto {
  private _id: number = 0;
  private _descripcion: string = "";
  private _precioUnitario: number  = 0;  
    constructor(id: number, descripcion: string, precioUnitario: number) {
        this.id = id;
        this.descripcion = descripcion;
        this.precioUnitario = precioUnitario;
    }
    public set id(id: number) {
        this._id = id; 
    }
    public get id(): number {
        return this._id;
    }
    public set descripcion(descripcion: string) {
        this._descripcion = descripcion; 
    }   
    public get descripcion(): string {
        return this._descripcion;
    }
    public set precioUnitario(precioUnitario: number) {
        this._precioUnitario = precioUnitario; 
    }
    public get precioUnitario(): number {
        return this._precioUnitario;
    }

     error(): string | false {
    if (
        this.id <= 0 
    )
    return `El id debe ser un número entero positivo (mayor a cero)`;
    if (
        this.descripcion.trim().length < 3
    )
    return `La descripción del producto debe tener una longitud mínima de 3 caracteres.`;

    if (
        this.precioUnitario <= 0 
    )
    return `El Precio Unitario debe ser un valor numérico mayor estricto a cero (e.g., $0.01 o más)`;
    return false;
  }




  toJSON(): IProducto {
    return {
      id: this.id,
      descripcion: this.descripcion,
      precioUnitario: this.precioUnitario,
    };
  }

}