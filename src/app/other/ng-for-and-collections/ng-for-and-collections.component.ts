import { Component } from '@angular/core';

interface Person {
    name: string;
    age: number;
}

interface PersonWithFriends extends Person {
    friends: Person[]
}

@Component({
    templateUrl: './ng-for-and-collections.component.html'
})
export class NgForAndCollectionsComponent {
    pageTitle = 'ngFor and collections';

    people: PersonWithFriends[] = [
        {
            name: 'Adam',
            age: 30,
            friends: [
                {
                    name: 'Adams 1',
                    age: 20
                },
                {
                    name: 'Adams 2',
                    age: 21
                }
            ]
        },
        {
            name: 'Bertil',
            age: 40,
            friends: [
                {
                    name: 'Bertils 1',
                    age: 18
                },
                {
                    name: 'Bertils 2',
                    age: 19
                }
            ]
        }
    ]
}
