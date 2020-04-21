export interface IFacturaDetalle {
  id?: number;
  productoId?: number;
  cantidad?: number;
  precioUnitario?: number;
}

export class FacturaDetalle implements IFacturaDetalle {
  constructor(public id?: number, public productoId?: number, public cantidad?: number, public precioUnitario?: number) {}
}
