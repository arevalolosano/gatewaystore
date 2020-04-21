import { Moment } from 'moment';

export interface INotificacion {
  id?: number;
  fecha?: Moment;
  mensaje?: string;
  fechaSeed?: Moment;
  userId?: number;
}

export class Notificacion implements INotificacion {
  constructor(public id?: number, public fecha?: Moment, public mensaje?: string, public fechaSeed?: Moment, public userId?: number) {}
}
