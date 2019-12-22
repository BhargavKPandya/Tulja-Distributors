import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { faSitemap, faTruckLoading, faShippingFast, faRupeeSign, faUsers } from '@fortawesome/free-solid-svg-icons';
import { DOCUMENT } from '@angular/common';
import { CounterInfoComponent } from '../home-page/counter-info/counter-info.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  faSitemap = faSitemap;
  faTruckLoading = faTruckLoading;
  faShippingFast = faShippingFast; 
  faRupeeSign = faRupeeSign;
  faUsers = faUsers;
  homePageBannerHeaderText: string = "Authorised Distributor Of Waghbakri Products In Vadodara";
  homePageBannerSubText: string = "Tulja distributors is your one step closer to purchase Waghbakri products at retail price. We sell waghbakri products to small venders and big supermarket under waghbakri terms and condition.";
  homePageBannerImage: string = "../../../assets/Main-Banner.png";
  showButton: boolean;
  constructor(@Inject (DOCUMENT) document) { }

  ngOnInit() {
  }

 
  //<app-home-page (scroll)="onWindowScroll($event);"></app-home-page>
}
