import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { PersonasComponent } from './components/personas/personas.component';
import { ListaComponent } from './components/lista/lista.component';
=======
import { PersonasComponent } from './components/personas/persona.component';
>>>>>>> c0e604ce64fb68e3703b49ac336c9a54efd375bb


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'Lista'},
  {path:'personas', component:PersonasComponent},
<<<<<<< HEAD
  {path:'lista', component:ListaComponent},
=======
  {path:'Lista', component:PersonasComponent}
>>>>>>> c0e604ce64fb68e3703b49ac336c9a54efd375bb

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
