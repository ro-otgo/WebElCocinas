import { Injectable } from '@angular/core';
import { User } from '@core/models/Users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  sesionActual?: User;

  usuarios: Array<User> = []
  constructor() { 
    this.crearUsuarios();
  }

  crearUsuario(usuario:User):void{
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push(usuario); 
  }

  crearUsuarios():void{
    let i = 1;
    let usuarios: Array<User> = [
        {
        id: 0,
        author: `Autor 1`,
        email: `email@email.com`,
        password: `123`,
        name: `Name 1`,
        firstName: `firstName 1`,
        chef: false,
        },
        {
          id: 0,
          author: `Autor 2`,
          email: `email2@email.com`,
          password: `123`,
          name: `Name 2`,
          firstName: `firstName 2`,
          chef: true,
        }
    ];
    usuarios.forEach((u)=>this.crearUsuario(u));
  }

  validarUsuario(email:string, pwd:string):boolean{
    // busca el usuario
    let usuario = this.usuarios.find((u) => {
      return u.email === email;
    });
    // devuelve falso si es nulo
    if(usuario == null){
      return false;
    }
    // comprueba contrasena
    let resultado = usuario?.password === pwd;
    if(resultado==true){
      this.sesionActual = usuario;
    }
    return resultado;
  }

  cerrarSesion(): void{
    this.sesionActual = undefined;
  }
}
