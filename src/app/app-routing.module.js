import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
const routes = [
    {
        path: 'Home',
        component: HomePageComponent
    },
    {
        path: 'About',
        component: AboutUsComponent
    },
    {
        path: 'Product',
        component: ProductPageComponent
    },
    {
        path: 'Contact',
        component: ContactPageComponent
    },
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/Home',
        pathMatch: 'full'
    }
];
const routerOptions = {
    useHash: false,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
};
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes, routerOptions)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map