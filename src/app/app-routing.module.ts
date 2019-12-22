import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component'
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';


const routes: Routes = [
  
  
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

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
