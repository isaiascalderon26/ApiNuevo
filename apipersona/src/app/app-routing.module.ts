import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './components/personas/persona.component';


const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'Lista'},
  {path:'personas', component:PersonasComponent},
  {path:'Lista', component:PersonasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
