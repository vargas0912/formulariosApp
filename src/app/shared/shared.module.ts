import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  imports: [
    CommonModule, 
    
  ],
  declarations: [SidemenuComponent],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
