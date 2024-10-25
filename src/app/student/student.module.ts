import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { AverageComponent } from './average/average.component';
import { ExamService } from './../exam.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    AverageComponent
  ],
  providers: [
    ExamService
  ]
})
export class StudentModule { }
