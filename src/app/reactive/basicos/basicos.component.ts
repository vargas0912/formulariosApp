import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent  {

  // myForm: FormGroup = new FormGroup({
  //   nombre:       new FormControl('Macbook pro'),
  //   precio:       new FormControl(10),
  //   existencias:  new FormControl(1)
  // })


  constructor(private formBuilder: FormBuilder ) { }

  myForm: FormGroup = this.formBuilder.group({
    nombre:       ['Macbook pro'],
    precio:       [10],
    existencias:  [1],
  })
}
