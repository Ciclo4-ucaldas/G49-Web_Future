import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { 

  }
Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
 return this.http.post<ModeloIdentificar>(`${this.url}/identificarPpersona`,{
  usuario: usuario,
  clave: clave
 }, {
  headers: new HttpHeaders({

  })
 })  
}
AlmacenarSesion(datos: ModeloIdentificar){
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion", stringDatos)

}
}
