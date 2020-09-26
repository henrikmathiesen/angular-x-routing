import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star/star.component';
import { TipsComponent } from './tips/tips.component';
import { FooPipe } from './pipes/foo.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    StarComponent,
    TipsComponent,
    FooPipe
  ],
  declarations: [
    StarComponent,
    TipsComponent,
    FooPipe
  ]
})
export class SharedModule { }
