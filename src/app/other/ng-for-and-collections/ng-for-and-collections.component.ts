import { Component } from '@angular/core';

@Component({
    templateUrl: './ng-for-and-collections.component.html'
})
export class NgForAndCollectionsComponent {
    pageTitle = 'ngFor and collections';

    someCollection = [
        {
            name: 'Adam',
            age: 30,
            friends: [
                {
                    name: 'Adams',
                    age: 25
                }
            ]
        }
    ]
}
