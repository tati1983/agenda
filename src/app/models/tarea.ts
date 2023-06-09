export class Tarea{

    id? : number;
    nombreTarea : string;
    descripcionTarea : string;
    fecha : Date;
    recordatorio? : boolean;

    constructor(nombreTarea : string, descripcionTarea : string, fecha : Date, fechaCreacion : string) {
        this.nombreTarea = nombreTarea;
        this.descripcionTarea = descripcionTarea;
        this.fecha = fecha;
    }
}