export class Persona {
    id!: number;
    apellido: string;
    edad: number;
    nombre: string;
    sobreMi: string;

    constructor(apellido:string, edad:number, nombre: string,
        sobreMi: string,){

            this.apellido = apellido;
            this.edad = edad;
            this.nombre = nombre;
            this.sobreMi = sobreMi;

    }
}
