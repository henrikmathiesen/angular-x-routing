import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { TipsComponent } from './tips/tips.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StarComponent,
    TipsComponent,
    LoaderComponent
  ],
  declarations: [
    StarComponent,
    TipsComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
