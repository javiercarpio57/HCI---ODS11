import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public idDoc: string;
  public email: string;
  public nombre: string;
  
  constructor() {
    this.email = null;
    this.idDoc = null;
    this.nombre = null;
   }
}
