import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';

@NgModule({
    imports: [
        SharedModule,
        OtherRoutingModule
    ],
    declarations: [
        OtherComponent,
        TooltipComponent,
        ButtonAsRadiosComponent
    ]
})
export class OtherModule { }
