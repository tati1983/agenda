import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private _tareaService: TareaService) { 
    this.formulario = this.fb.group({
      nombreTarea : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      descripcionTarea : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      fecha : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      recordatorio : ['']
    })
  }

  crarTarea(){
    const TAREA: Tarea = {
      nombreTarea: this.formulario.value.nombreTarea,
      descripcionTarea: this.formulario.value.descripcionTarea,
      fecha: this.formulario.value.fecha,
      recordatorio: this.formulario.value.recordatorio
    }
    // console.log(TAREA)
    this._tareaService.guardarTarea(TAREA).then(() => {
      console.log('Tarea guardada');
      this.formulario.reset();
    }, err => {
      console.log(err);
      this.formulario.reset();
    })
  }
}
