import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit() {
  }


  nameValid(): boolean {
    return this.myForm?.controls['producto']?.invalid &&
      this.myForm?.controls['producto']?.touched;
  }

  precioValid(): boolean {
    return this.myForm?.controls['precio']?.value < 1 && this.myForm?.controls['precio']?.touched;
  }

  save(myForm: NgForm){
    console.log(myForm.value );
    
  }

}
