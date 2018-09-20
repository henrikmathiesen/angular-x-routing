import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'app/shared/shared.module';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';
import { SliderNativeComponent } from './slider-native/slider-native.component';
import { SliderBootstrapComponent } from './slider-bootstrap/slider-bootstrap.component';

@NgModule({
    imports: [
        FormsModule,
        NgbButtonsModule,
        SharedModule,
        OtherRoutingModule
    ],
    declarations: [
        OtherComponent,
        TooltipComponent,
        ButtonAsRadiosComponent,
        SliderNativeComponent,
        SliderBootstrapComponent
    ]
})
export class OtherModule { }
