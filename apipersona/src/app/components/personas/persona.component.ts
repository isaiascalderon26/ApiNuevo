import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonasComponent implements OnInit {
  
  titulo = 'Lsitado de Persona';
  constructor() { }

  ngOnInit(): void {
  }

}
