import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PersonasComponent } from './components/personas/personas.component';
import { PersonaService } from './service/persona.service';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListaComponent } from './components/lista/lista.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
=======
import { PersonasComponent } from './components/personas/persona.component';
import { LayoutModule } from './layout/layout.module';
import { from } from 'rxjs';
>>>>>>> c0e604ce64fb68e3703b49ac336c9a54efd375bb

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    NavbarComponent,
    ListaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
=======
    LayoutModule,
>>>>>>> c0e604ce64fb68e3703b49ac336c9a54efd375bb
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
