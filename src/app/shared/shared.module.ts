import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from './sidemenu/sidemenu.component';



@NgModule({
  imports: [
    CommonModule, 
    RouterModule
  ],
  declarations: [SidemenuComponent],
  exports: [
    SidemenuComponent
  ]
})
export class SharedModule { }
