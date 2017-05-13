import { Component, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'mc-switcher-btn',
    templateUrl: 'switcher.component.html',
    styleUrls: [ 'switcher.scss' ]
})

export class SwitcherComponent {

    @Input()
    value = true;

    @Output()
    open: EventEmitter<any> = new EventEmitter<Object>();
    close: EventEmitter<any> = new EventEmitter<Object>();
    componentName: 'DropdownComponent';

    public onClick($event): void {
        this.value = !this.value;
        if (this.value) {
            this.open.emit(null);
        } else {
            this.close.emit(null);
        }
    }

}
