import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule, MatCardModule, MatInputModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import { CounterInfoComponent } from './Pages/home-page/counter-info/counter-info.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { BannerSectionComponent } from './Shared/banner-section/banner-section.component';
import { HereMapComponent } from './Pages/contact-page/here-map/here-map.component';
import { OpenstreetmapComponent } from './Pages/contact-page/openstreetmap/openstreetmap.component';
import { SuccessDialogComponent } from './Pages/contact-page/success-dialog/success-dialog.component';
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            FooterComponent,
            HomePageComponent,
            ContactPageComponent,
            ProductPageComponent,
            CounterInfoComponent,
            AboutUsComponent,
            BannerSectionComponent,
            HereMapComponent,
            OpenstreetmapComponent,
            SuccessDialogComponent
        ],
        entryComponents: [SuccessDialogComponent],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MDBBootstrapModule,
            FontAwesomeModule,
            MatCardModule,
            MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule,
            HttpClientModule,
            FormsModule,
            ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map