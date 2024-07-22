import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleado',
  templateUrl: './count-empleado.component.html',
  styleUrls: ['./count-empleado.component.css']
})
export class CountEmpleadoComponent {
  @Input() todos: number;
  @Input() masculino: number;
  @Input() femenino: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();

  radioButtonSeleccionado = "Todos";

  constructor(){
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado)
  }
}
