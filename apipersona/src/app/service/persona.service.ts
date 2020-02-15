
import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  http: HttpClient;
  access_key : string ="b1e4ca1e9656ab140077fd8e3ee095dc";

  constructor() {}


  emailValidacion(email: string){
    return  this.http.get(`https://apilayer.net/api/check?access_key=${ this.access_key }&email=${ email }`);
   }

}
