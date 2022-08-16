import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit() {
  }


  nameValid(): boolean {
    return this.myForm?.controls['nombre']?.invalid &&
      this.myForm?.controls['nombre']?.touched;
  }

  guardar(myForm: NgForm)
  {
    console.log("salvado");
    
  }

}
