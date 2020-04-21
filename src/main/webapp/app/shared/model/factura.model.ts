import { Moment } from 'moment';
import { ICliente } from 'app/shared/model/cliente.model';

export interface IFactura {
  id?: number;
  fecha?: Moment;
  valor?: number;
  fechaPago?: Moment;
  clientes?: ICliente[];
}

export class Factura implements IFactura {
  constructor(public id?: number, public fecha?: Moment, public valor?: number, public fechaPago?: Moment, public clientes?: ICliente[]) {}
}
