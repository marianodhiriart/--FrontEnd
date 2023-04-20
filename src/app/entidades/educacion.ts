export class Educacion {
    id! :number;
    descripcion: string;
    fin: string;
    inicio: string;
    institucion: string;
    titulo: string;

    constructor(descripcion: string, fin: string, inicio: string,
        institucion:string, titulo:string){

            this.descripcion = descripcion;
            this.fin = fin;
            this.inicio = inicio;
            this.institucion = institucion;
            this.titulo = titulo;


    }

}
