import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';

interface Person {
    name: string;
    age: number;
}

interface PersonWithFriends extends Person {
    friends: Person[];
}

interface Todo {
    title: string;
    id: number;
}

@Component({
    templateUrl: './ng-for-and-collections.component.html'
})
export class NgForAndCollectionsComponent implements OnInit {
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
    ];

    todos: Todo[];
    getMoreTodos: Todo[];
    todosPropertyNotDefined: any;
    todosObs$: Observable<Todo[]>;

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.getCollectionAndPopulateProperty();
        this.getCollectionPopulatePropertyNotDefined();
        this.getCollectionAndReturnObservableForAsyncPipe();

        this.getFriendsName();
    }

    getTodos() {
        this.http.get('http://jsonplaceholder.typicode.com/todos')
            .subscribe(
                (v: Todo[]) => {
                    const tenTodos = v.slice(0, 10);
                    this.getMoreTodos = tenTodos;
                },
                e => console.log(e)
            );
    }

    private getCollectionAndPopulateProperty() {
        this.http.get('http://jsonplaceholder.typicode.com/todos')
            .subscribe(
                (v: Todo[]) => {
                    const tenTodos = v.slice(0, 10);
                    this.todos = tenTodos;
                },
                e => console.log(e)
            );
    }

    private getCollectionPopulatePropertyNotDefined() {
        this.http.get('http://jsonplaceholder.typicode.com/todos')
            .subscribe(
                (v: Todo[]) => {
                    const tenTodos = v.slice(0, 10);
                    this.todosPropertyNotDefined = { todos: tenTodos };
                },
                e => console.log(e)
            );
    }

    private getCollectionAndReturnObservableForAsyncPipe() {
        this.todosObs$ = this.http.get<Todo[]>('http://jsonplaceholder.typicode.com/todos');
    }

    private getFriendsName() {
        const friends = this.people.map(v => v.friends);

        console.log('friends');
        console.log(friends);
        console.log('/friends');

        const friendsNames: string[] = [];

        for (let i = 0; i < friends.length; i++) {

            for (let j = 0; j < friends[i].length; j++) {

                friendsNames.push(friends[i][j].name);

            }

        }

        console.log('friends with names');
        console.log(friendsNames);          // ['Adams 1', 'Adams 2', 'Bertils 1', 'Bertils 2']
        console.log('/friends with names');
    }

}
