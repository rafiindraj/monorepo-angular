import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { UiLibModule } from 'ui-lib';


@NgModule({
  declarations: [
    LayoutsComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    UiLibModule
  ]
})
export class LayoutsModule { }
