import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './links.component.html'
})
export class LinksComponent {

    pageTitle = 'Links';
    productId = 2;

    constructor(
        private router: Router
    ) { }

    onGoToOtherOne() {
        this.router.navigateByUrl('/other/tooltip');
    }

    onGoToOtherTwo() {
        this.router.navigate(['/other', 'tooltip']);
    }

    onGotoProductWithId() {
        this.router.navigate(['/products', this.productId, 'edit']);
    }
}
