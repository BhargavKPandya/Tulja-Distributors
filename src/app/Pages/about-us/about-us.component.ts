import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  aboutPageBannerImage: string = "../../../assets/office.png";
  aboutBannerHeaderText: string = "Want to know who we are?";
  aboutBannerSubText: string = "You can read our company history and how we do our work on this page. ";
 // homePageBannerBtnText: string = "View Products"
  constructor() { }

  ngOnInit() {
  }

}
