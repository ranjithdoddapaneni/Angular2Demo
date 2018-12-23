import { Component, Input } from '@angular/core';
@Component({
    selector: 'lifeCycle',
    template: `i entered: {{nameField}}`
})

export class LifeCycle {
    @Input()
    nameField: string;

}