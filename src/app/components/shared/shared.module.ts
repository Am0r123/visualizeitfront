// src/app/components/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrayVisualizerComponent } from './array-visualizer/array-visualizer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArrayVisualizerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ArrayVisualizerComponent
  ]
})
export class SharedModule { }
