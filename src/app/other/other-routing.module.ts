import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';
import { SliderNativeComponent } from './slider-native/slider-native.component';
import { SliderBootstrapComponent } from './slider-bootstrap/slider-bootstrap.component';
import { DatepickerBootstrapComponent } from './datepicker-bootstrap/datepicker-bootstrap.component';

const routes: Routes = [
    {
        path: 'other',
        component: OtherComponent,
    },
    {
        path: 'other/tooltip',
        component: TooltipComponent
    },
    {
        path: 'other/buttons-as-radios',
        component: ButtonAsRadiosComponent
    },
    {
        path: 'other/slider-native',
        component: SliderNativeComponent
    },
    {
        path: 'other/slider-bootstrap',
        component: SliderBootstrapComponent
    },
    {
        path: 'other/datepicker-bootstrap',
        component: DatepickerBootstrapComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class OtherRoutingModule { }
