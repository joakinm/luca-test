import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private preguntaService: PreguntasService, private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.preguntaIndex = +this.rutaActiva.snapshot.paramMap.get('id');
    if (this.preguntaIndex > 0) {
      this.modoEdit = true;
    }
    this.initForm();
  }

  private initForm() {
    let titulo = '';
    let publicacion = '';

    if (this.modoEdit) {
      const pregunta = this.preguntaService.obtenerPreguntasXId(this.preguntaIndex);
      if(pregunta) {
        titulo = pregunta.titulo;
        publicacion = pregunta.publicacion;
      }
    }

    this.form = new FormGroup({
      'titulo' : new FormControl(titulo, Validators.required),
      'publicacion' : new FormControl(publicacion, Validators.required),
    });
  }

  public publicar() {
    if (this.modoEdit) {
      this.preguntaService.modificarPreguntas(this.form.value, this.preguntaIndex);
      this.modoEdit = false;
      this.initForm();
    } else {
      this.preguntaService.agregarPregunta(this.form.value);
      this.initForm();
    }
  }

  public irAlListado() {
    this.router.navigate(['/listado']);
  }
}
