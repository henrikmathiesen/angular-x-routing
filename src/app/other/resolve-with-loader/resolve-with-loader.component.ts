import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './resolve-with-loader.component.html'
})
export class ResolveWithLoaderComponent {

    pageTitle = 'Resolve with Loader';

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute) { }

    onPrev() {
        this.router.navigate(['step1'], { relativeTo: this.activatedRoute });
    }

    onNext() {
        this.router.navigate(['step2'], { relativeTo: this.activatedRoute });
    }

}
