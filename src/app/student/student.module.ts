import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AverageComponent } from './average/average.component';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AverageComponent
  ]
})
export class StudentModule { }
