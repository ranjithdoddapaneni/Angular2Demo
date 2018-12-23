import { Component, Input,OnChanges,SimpleChanges } from '@angular/core';
@Component({
    selector: 'lifeCycle',
    template: `i entered: {{nameField}}`
})

export class LifeCycle implements OnChanges {
    @Input() nameField: string;
    ngOnChanges(changes: SimpleChanges) {
        for (let item in changes)
        {
            let i = changes[item];
            alert(JSON.stringify(i.currentValue));          
        }
    }

}