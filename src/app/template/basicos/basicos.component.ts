import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  save(myForm: NgForm){
    console.log(myForm.value );
    
  }

}
