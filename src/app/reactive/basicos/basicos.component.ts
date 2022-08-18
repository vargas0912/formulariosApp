import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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


  myForm: FormGroup = this.formBuilder.group({
    nombre:       [, [Validators.required, Validators.minLength(5)]],
    precio:       [, [Validators.required, Validators.min(0)] ],
    existencias:  [, [Validators.required, Validators.min(0)]],
  })

  constructor(private formBuilder: FormBuilder ) { }

  nameValid(campo: string) {
    return this.myForm.controls?.[campo]?.errors 
      && this.myForm.controls[campo]?.touched;
  }


}
