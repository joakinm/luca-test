import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PreguntasService } from '../form-pregunta/preguntas.service';
import { Pregunta } from '../models/pregunta.model';

@Component({
  selector: 'app-pregunta-listado',
  templateUrl: './pregunta-listado.component.html',
  styleUrls: ['./pregunta-listado.component.sass']
})
export class PreguntaListadoComponent implements OnInit {
  public preguntas = new Array<Pregunta>();
  public subs = new Subscription();
  constructor(private preguntasService: PreguntasService, private router: Router) { }

  ngOnInit(): void {
    this.preguntas = this.preguntasService.obtenerPreguntas();
    this.subs = this.preguntasService.preguntaCambios.subscribe(p => {
      this.preguntas = p
    });

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  nuevaPregunta() {
    this.router.navigate(['/preguntas']);
  }

  modificarPregunta(id: number,) {
    this.router.navigate(['/preguntas/' + id]);
  }
}
