import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function init_plugins()

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame:boolean = false;

  constructor(public router: Router, public _usuarioservice:UsuarioService) { }

  ngOnInit() {
    init_plugins();
  }
  ingresar(forma:NgForm){
    if(forma.invalid){
      return;
    }
    let usuario = new Usuario(
      null,
      forma.value.email,
      forma.value.password
    )
    this._usuarioservice.login(usuario, forma.value.recuerdame)
        .subscribe(res=>this.router.navigate(['/dashboard']))
    // console.log(forma.valid);
    // console.log(forma.value);
    // this.router.navigate(['/dashboard'])
  }
}
