import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';

import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ],
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ]
})
export class ReactiveModule { }
