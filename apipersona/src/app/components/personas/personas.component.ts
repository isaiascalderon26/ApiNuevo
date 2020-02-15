import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(personaservice: PersonaService) { 
     console.log(
      personaservice.emailValidacion('isaiasa.calderon@gmail.com').subscribe((data) => {
        console.log(data);

      })
      ); 
  }

  ngOnInit(): void {
  }

}
