export class Empleado {
  legajo: number;
  nombre: string;
  apellido: string;
  genero: string;
  salario: number;

  constructor(leg: number, nombre: string, apellido: string, genero: string, salario: number){
    this.legajo = leg;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.salario = salario;

  }
}