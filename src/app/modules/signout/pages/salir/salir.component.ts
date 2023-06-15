import { Component } from '@angular/core';
import { UserServiceService } from '@core/services/user-service.service';
import { SalirDialogComponent } from '../salir-dialog/salir-dialog.component';
import { DialogData } from '../salir-dialog/salir-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salir',
  templateUrl: './salir.component.html',
  styleUrls: ['./salir.component.css']
})
export class SalirComponent {

  constructor(private userService: UserServiceService,
      public dialog: MatDialog,
      private router: Router)
  {}

  abrirDialogo(){
      if ( this.userService.sesionActual ==  null){
      let data:DialogData = {
        title: 'Errror',
        content:'No session open'
      };
      this.dialog.open(
          SalirDialogComponent,
          {data}
      );
      }
    else{
      this.userService.cerrarSesion();
      this.router.navigate(['/']);
    }
  }

}
