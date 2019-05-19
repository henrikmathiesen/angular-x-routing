import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './links.component.html'
})
export class LinksComponent {

    pageTitle = 'Links';
    productId = 2;

    // TODO: Link from here to products and from products to here. From code and from template.
    // And to other/resolve-with-loader


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
