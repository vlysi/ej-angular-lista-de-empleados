import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit{

  listEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Perez', genero: 'Masculino', salario: 950000},
    { legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', genero: 'Masculino', salario: 750000},
    { legajo: 3, nombre: 'Maria', apellido: 'Garcia', genero: 'Femenino', salario: 910000},
    { legajo: 4, nombre: 'Ignacio', apellido: 'Suarez', genero: 'Masculino', salario: 650000},
    { legajo: 5, nombre: 'lucia', apellido: 'Navarro', genero: 'Femenino', salario: 760000},
    { legajo: 6, nombre: 'Nicolas', apellido: 'Marquez', genero: 'Masculino', salario: 950000}
  ]

  radioButtonSeleccionado = "Todos";

  constructor(){}

  ngOnInit(): void {
   
  }

  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.genero === "Femenino").length
  }

  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.genero === "Masculino").length
  }

  empleadoCountRadioButtonChange(radioButtonSelec: string): void{
    this.radioButtonSeleccionado = radioButtonSelec;
  }
}
