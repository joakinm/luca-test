import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPreguntaComponent } from './form-pregunta/form-pregunta.component';
import { PreguntaListadoComponent } from './pregunta-listado/pregunta-listado.component';


const routes: Routes = [
  {path:'', redirectTo:'/listado', pathMatch:'full'},
  {path:'listado', component: PreguntaListadoComponent},
  {path: 'preguntas', component: FormPreguntaComponent},
  {path: 'preguntas/:id', component: FormPreguntaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
