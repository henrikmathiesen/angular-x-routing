import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';

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
