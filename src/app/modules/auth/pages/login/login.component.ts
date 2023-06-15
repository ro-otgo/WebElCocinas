import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '@core/services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model = {
    email : '',
    pwd : ''
  }

  error:string = '';

  constructor(private userService: UserServiceService,
    private router: Router) {}


  ngOnInit(): void {
  }

  validateUser(){
    console.log(`Se va a validar el usuario ${this.model.email}`);
    let resultado:boolean = this.userService.validarUsuario(this.model.email,this.model.pwd);
    if(resultado==false){
      this.error = 'Error al validar el usuario';
    } 
    else{
      this.router.navigate(['/']);
    }
  }

}
