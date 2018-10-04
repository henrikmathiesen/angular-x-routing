import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbButtonsModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from 'app/shared/shared.module';
import { OtherRoutingModule } from './other-routing.module';
import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';
import { SliderNativeComponent } from './slider-native/slider-native.component';
import { SliderBootstrapComponent } from './slider-bootstrap/slider-bootstrap.component';
import { DatepickerBootstrapComponent } from './datepicker-bootstrap/datepicker-bootstrap.component';
import { BetterRemMixinComponent } from './better-rem-mixin/better-rem-mixin.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
    imports: [
        FormsModule,
        BrowserAnimationsModule,
        NgbButtonsModule,
        NgbDatepickerModule,
        SharedModule,
        OtherRoutingModule
    ],
    declarations: [
        OtherComponent,
        TooltipComponent,
        ButtonAsRadiosComponent,
        SliderNativeComponent,
        SliderBootstrapComponent,
        DatepickerBootstrapComponent,
        BetterRemMixinComponent,
        AnimationComponent
    ]
})
export class OtherModule { }
