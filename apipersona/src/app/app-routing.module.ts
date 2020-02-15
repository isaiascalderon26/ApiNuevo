import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './components/personas/personas.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  {path:'personas', component:PersonasComponent},
  {path:'lista', component:ListaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
