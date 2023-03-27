import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})
export class CrearTareaComponent {
  formulario: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private _tareaService: TareaService,
    private toastr : ToastrService
    ) { 
    this.formulario = this.fb.group({
      nombreTarea : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      descripcionTarea : ['', [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
      fecha : ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      recordatorio : ['']
    })
  }

  crarTarea(){
    this.loading = true;
    const TAREA: Tarea = {
      nombreTarea: this.formulario.value.nombreTarea,
      descripcionTarea: this.formulario.value.descripcionTarea,
      fecha: this.formulario.value.fecha,
      recordatorio: this.formulario.value.recordatorio
    }
    // console.log(TAREA)
    this._tareaService.guardarTarea(TAREA).then(() => {
      console.log('Tarea guardada');
      this.toastr.success('Tarea registrada exitosamente');
      this.formulario.reset();
      this.loading = false;
    }, err => {
      console.log(err);
      this.toastr.error('Ocurrió un error');
      this.formulario.reset();
      this.loading = false;
    })
  }
}
