import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html'
})
export class DinamicosComponent  {
  @ViewChild('myForm') myForm!: NgForm;

  persona: Persona = {
    nombre: 'Gerardo',
    favoritos: [
      {id: 1, nombre: 'Guitar hero'},
      {id: 2, nombre: 'Metal gear'}
    ]
  }

  nameValid(): boolean {
    return this.myForm?.controls['nombre']?.invalid &&
      this.myForm?.controls['nombre']?.touched;
  }

  guardar(myForm: NgForm)
  {
    console.log("salvado");
    
  }

  eliminar(index: number){
    this.persona.favoritos.splice(index, 1);
  }

}
