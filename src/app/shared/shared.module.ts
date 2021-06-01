import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FlexModule} from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    FlexModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
