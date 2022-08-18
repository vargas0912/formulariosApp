import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent  {

  myForm: FormGroup = this.formBuilder.group({
    nombre:       [, [Validators.required, Validators.minLength(3)]]
  });

  constructor(private formBuilder: FormBuilder ) { }

  nameValid(campo: string) {
    return this.myForm.controls?.[campo]?.errors 
      && this.myForm.controls[campo]?.touched;
  }

  save(){
    if (this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);

    this.myForm.reset();
  }

}
