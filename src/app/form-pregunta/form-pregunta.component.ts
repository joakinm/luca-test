import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pregunta } from '../models/pregunta.model';
import { PreguntasService } from './preguntas.service';

@Component({
  selector: 'app-form-pregunta',
  templateUrl: './form-pregunta.component.html',
  styleUrls: ['./form-pregunta.component.scss']
})
export class FormPreguntaComponent implements OnInit {
  public form: FormGroup;
  public titulo: string;
  public publicacion: string;
  public modoEdit = false;
  public preguntaIndex: number;
  constructor(private preguntaService: PreguntasService) { }

  ngOnInit(): void {
    
    this.initForm();
  }

  private initForm(pregunta?: Pregunta) {
    let titulo = '';
    let publicacion = '';

    if(this.modoEdit) {
      titulo = pregunta.titulo;
      publicacion = pregunta.publicacion;
    }

    this.form = new FormGroup({
      'titulo' : new FormControl(titulo, Validators.required),
      'publicacion' : new FormControl(publicacion, Validators.required),
    });
  }

  public publicar() {
    if (this.modoEdit) {
      this.preguntaService.modificarPreguntas(this.form.value,this.preguntaIndex);
    } else {
      this.preguntaService.agregarPregunta(this.form.value);
    }
  }
}
