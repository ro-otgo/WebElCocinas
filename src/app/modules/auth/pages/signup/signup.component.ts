import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '@core/services/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model = {
    name:'',
    firstName: '',
    emailAddress: '',
    password: '',
    password2:'',
    chef: false
  }

  error:string= '';

  constructor(private userService: UserServiceService,
    private router: Router){}

  createUser(){
    console.log('Se va a crear un usuario');
    if(!this.validarModel()){
      console.log('Datos incorrectos');
      console.log(this.error);
      if(this.error == null || this.error.trim() == ''){
        this.error = 'Compruebe los datos del formulario';
      }
    }else {
      this.userService.crearUsuario(
        {
          id:0,
          author: this.model.name,
          email: this.model.emailAddress,
          password: this.model.password,
          name:  this.model.name,
          firstName:  this.model.firstName,
          chef:  this.model.chef,
        }
      );
      this.router.navigate(['/']);
    }
  }

  validarCampo(valor:string):boolean{
    return ! (valor==null || valor.trim() == '');
  }

  validarModel(): boolean{
    console.log(this.model);
    let result = true;
    if(!this.validarCampo(this.model.name)){
      this.error = 'Name empty';
      result = false;
    }
    if(!this.validarCampo(this.model.firstName)){
      this.error = 'FirstName empty';
      result = false;
    }
    if(!this.validarCampo(this.model.emailAddress)){
      this.error = 'emailAddress empty';
      result = false;
    }
    if(!this.validarCampo(this.model.password)){
      this.error = 'Password empty';
      result = false;
    }
    if(!this.validarCampo(this.model.password2)){
      console.log(this.model.password2);
      this.error = 'Password confirmation is empty';
      result = false;
    }
    if(this.model.password !== this.model.password2){
      this.error = 'Password mismatch'
      result = false;
    }
    return result;
  }
}
