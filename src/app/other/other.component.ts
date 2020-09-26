import { Component, OnInit } from '@angular/core';

import { FooPipe } from 'app/shared/pipes/foo.pipe';

@Component({
    templateUrl: './other.component.html',
})
export class OtherComponent implements OnInit {
    pageTitle = 'Other Training';

    constructor(
        private fooPipe: FooPipe
    ) { }

    ngOnInit() {
        console.log(this.fooPipe.transform('pipe'));
    }
}
