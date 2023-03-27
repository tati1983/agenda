import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-listar-tarea',
  templateUrl: './listar-tarea.component.html',
  styleUrls: ['./listar-tarea.component.css']
})
export class ListarTareaComponent implements OnInit {

  constructor (private _tareaService: TareaService) { }

  listaTareas : Tarea [] = [];

  ngOnInit(): void {
    this.listarTarea();
  }

  listarTarea(){
    this._tareaService.listarTarea().subscribe(result => {
      console.log(result);
      this.listaTareas = [];
      result.forEach((result:any) => {
        this.listaTareas.push({
          id : result.payload.doc.id,
          ...result.payload.doc.data()
        });
      });
      console.log(this.listaTareas);
    })
  }

}
