import { Component, OnInit } from '@angular/core';

import { AuthService } from '@services/auth.service';

/*
    https://netbasal.com/sexier-imports-in-typescript-e3c645bdd3c6
    see tsconfig, paths

    The import of AuthService above would have been even nicer with an index.ts in the folder.
    Then we could have wrote import { AuthService } from '@services';

    VS Code, with tsc 2.5.3 did not give optimal intellisence for the import.
*/

@Component({
    templateUrl: './better-imports.component.html',
})
export class BetterImportsComponent implements OnInit {
    pageTitle = 'Better Imports';

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
        console.log(this.authService.isLoggedIn());
    }
}
