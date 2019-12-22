import * as tslib_1 from "tslib";
import { Component, HostListener } from '@angular/core';
import { faHome, faEnvelope, faUser, faListAlt } from '@fortawesome/free-solid-svg-icons';
let HeaderComponent = class HeaderComponent {
    constructor() {
        this.show = false;
        this.faHome = faHome;
        this.faEnvelope = faEnvelope;
        this.faUser = faUser;
        this.faListAlt = faListAlt;
    }
    ngOnInit() {
    }
    toggleNavbar() {
        this.show = !this.show;
    }
    toggleNavbar1() {
        this.show = false;
    }
    onWindowScroll(e) {
        if (window.pageYOffset > 60) {
            console.log("From Header" + window.pageYOffset);
            let element = document.getElementById('navbarMenu');
            console.log("Element NavBar" + element);
            element.classList.add('menu_fixed');
        }
        else {
            let element = document.getElementById('navbarMenu');
            element.classList.remove('menu_fixed');
        }
    }
};
tslib_1.__decorate([
    HostListener('window:scroll', ['$event'])
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = tslib_1.__decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map