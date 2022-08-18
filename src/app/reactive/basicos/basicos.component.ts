import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

  myForm: FormGroup = new FormGroup({
    'nombre': new FormControl('Macbook pro')
  })
  constructor() { }

}
