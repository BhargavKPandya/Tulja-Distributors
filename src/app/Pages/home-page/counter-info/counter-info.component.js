import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
let CounterInfoComponent = class CounterInfoComponent {
    constructor(el) {
        this.el = el;
        this.counterState = 'hide';
    }
    ngOnInit() {
    }
    checkCounterScroll() {
        const counterPosition = this.el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;
        if (scrollPosition >= counterPosition) {
            this.counterState = 'show';
            //} else {
            // this.counterState = 'hide';
        }
    }
};
tslib_1.__decorate([
    HostListener('window:scroll', ['$event'])
], CounterInfoComponent.prototype, "checkCounterScroll", null);
CounterInfoComponent = tslib_1.__decorate([
    Component({
        selector: 'app-counter-info',
        templateUrl: './counter-info.component.html',
        styleUrls: ['./counter-info.component.scss'],
        animations: [
            trigger('conterAnimation', [
                state('show', style({
                    opacity: 1,
                    transform: "translateX(0)"
                })),
                state('hide', style({
                    opacity: 0,
                    transform: "translateX(-100%)"
                })),
                transition('show => hide', animate('350ms ease-out')),
                transition('hide => show', animate('350ms ease-in'))
            ])
        ]
    })
], CounterInfoComponent);
export { CounterInfoComponent };
//# sourceMappingURL=counter-info.component.js.map