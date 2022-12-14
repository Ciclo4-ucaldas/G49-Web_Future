import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
const cryptoJs = require("cryptojs");

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

fgValidador: FormGroup = this.fb.group({
  'usuario': ['',[Validators.required, Validators.email]],
  'clave': ['',[Validators.required]]
});

  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService) { }

  ngOnInit(): void {
    
  }
  identificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJs.MD5(clave);
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) =>{
      this.servicioSeguridad.AlmacenarSesion(datos);
    }, (error: any) =>{
      //KO
      alert("Datos incorrectos")
    })

  }

}
