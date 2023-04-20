export class Trabajo {
    id!:number;
    institucion: string;
    fin: number;
    inicio: number;
    descripcion: string;

    constructor(institucion:string, fin:number, inicio:number,
        descripcion: string){
            this.institucion = institucion;
            this.fin = fin;
            this.inicio = inicio;
            this.descripcion = descripcion;
    }
}
