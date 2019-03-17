import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OtherComponent } from './other.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ButtonAsRadiosComponent } from './buttons-as-radios/buttons-as-radios.component';
import { SliderNativeComponent } from './slider-native/slider-native.component';
import { SliderBootstrapComponent } from './slider-bootstrap/slider-bootstrap.component';
import { DatepickerBootstrapComponent } from './datepicker-bootstrap/datepicker-bootstrap.component';
import { BetterRemMixinComponent } from './better-rem-mixin/better-rem-mixin.component';
import { AnimationComponent } from './animation/animation.component';
import { BetterImportsComponent } from './better-imports/better-imports.component';

import { ResolveWithLoaderComponent, Step1Component, Step2Component } from './resolve-with-loader';

import { Step2ResolverService } from 'app/core/step2-resolver.service';

const routes: Routes = [
    {
        path: 'other',
        component: OtherComponent,

        //#region other sub routes as children
        // children: [
        //     {
        //         path: 'tooltip',
        //         component: TooltipComponent
        //     },
        //     {
        //         path: 'buttons-as-radios',
        //         component: ButtonAsRadiosComponent
        //     },
        //     {
        //         path: 'slider-native',
        //         component: SliderNativeComponent
        //     },
        //     {
        //         path: 'slider-bootstrap',
        //         component: SliderBootstrapComponent
        //     },
        //     {
        //         path: 'datepicker-bootstrap',
        //         component: DatepickerBootstrapComponent
        //     },
        //     {
        //         path: 'better-rem-mixin',
        //         component: BetterRemMixinComponent
        //     },
        //     {
        //         path: 'animation',
        //         component: AnimationComponent
        //     },
        //     {
        //         path: 'better-imports',
        //         component: BetterImportsComponent
        //     },
        // ]

        //#endregion
    },

    // We could have probably used children[] under 'other' for these.
    // Well. It requires a router outlet on other.component.html and
    // then we dont have the desired design.

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
    },
    {
        path: 'other/better-rem-mixin',
        component: BetterRemMixinComponent
    },
    {
        path: 'other/animation',
        component: AnimationComponent
    },
    {
        path: 'other/better-imports',
        component: BetterImportsComponent
    },
    {
        path: 'other/resolve-with-loader',
        component: ResolveWithLoaderComponent,
        children: [
            {
                path: '',
                redirectTo: 'step1',
                pathMatch: 'full'
            },
            {
                path: 'step1',
                component: Step1Component
            },
            {
                path: 'step2',
                component: Step2Component,
                resolve: {
                    num: Step2ResolverService
                }
            },
        ]
    }

    // ---------------------------------------------------------------

    // {
    //     path: 'other-empty-parent-route',
    //     children: [
    //         {
    //             path: '',
    //             redirectTo: 'topic01',
    //             pathMatch: 'full'
    //         },
    //         {
    //             path: 'topic01',
    //             component: Topic01Component
    //         }
    //     ]
    // }
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
