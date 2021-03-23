import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Pregunta } from '../models/pregunta.model';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {
  private dataPreguntas = new Array<Pregunta>();
  public preguntaCambios = new Subject<Array<Pregunta>>();
  constructor() { }

  public agregarPregunta(pregunta: Pregunta) {
    this.dataPreguntas.push(pregunta);
    this.preguntaCambios.next(this.dataPreguntas.slice());
  }

  public modificarPreguntas(preguntaAModificar: Pregunta, index: number) {
    this.dataPreguntas[index] = preguntaAModificar;
    this.preguntaCambios.next(this.dataPreguntas.slice());
  }

  public obtenerPreguntas() {
    return this.dataPreguntas;
  }

  public obtenerPreguntasXId(id: number) {
    return this.dataPreguntas[id];
  }
}
