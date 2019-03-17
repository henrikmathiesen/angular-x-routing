import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './step-2.component.html'
})
export class Step2Component implements OnInit {

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log('GOT THE NUMBER', this.activatedRoute.snapshot.data['num']);
    }

}
