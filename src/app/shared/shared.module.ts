import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import {FlexModule} from '@angular/flex-layout';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
  ],
  exports:[
    FlexModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class SharedModule { }
