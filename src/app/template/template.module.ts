import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from './template-routing.module';

import { BasicosComponent }     from './basicos/basicos.component';
import { DinamicosComponent }   from './dinamicos/dinamicos.component';
import { SwitchesComponent }    from './switches/switches.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TemplateRoutingModule
  ],
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ]
})
export class TemplateModule { }
