import { Component } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent {

  persona = {
    genre: 'F',
    notificaciones: true
  }

  terminos: boolean = false;

}
