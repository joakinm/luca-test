import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormPreguntaComponent } from './form-pregunta/form-pregunta.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PreguntaListadoComponent } from './pregunta-listado/pregunta-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPreguntaComponent,
    PreguntaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
