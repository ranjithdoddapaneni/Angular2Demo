import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `Enter Input: <input type='text' [(ngModel)]='myName'/>
               <br><br>
               <lifeCycle [nameField]='myName'></lifeCycle>
               `
})
export class AppComponent { myName: string = 'Ranjith'; }
