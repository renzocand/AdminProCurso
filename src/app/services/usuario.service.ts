import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(public http: HttpClient) { 
    console.log('Servicio de usuario listo');
  }

  crearUsuario(usuario: Usuario){
    let url = URL_SERVICIOS+'/usuario';
    return this.http.post( url, usuario).pipe(
      map(res=>{
        swal('Usuario creado', usuario['email'], 'success');
        return res['usuarioGuardado']
      })
    )
  }

  login(usuario:Usuario, recordar:boolean=false){
    let url = URL_SERVICIOS+'/login';
    return this.http.post(url, usuario).pipe(
      map(res=>{
        localStorage.setItem('id',res['usuarioDB']._id);
        localStorage.setItem('token',res['token']);
        localStorage.setItem('usuario',JSON.stringify( res['usuarioDB']));

        return true;
      })
    )
  }
}
