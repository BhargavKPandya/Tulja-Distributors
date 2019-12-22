import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner-section',
  templateUrl: './banner-section.component.html',
  styleUrls: ['./banner-section.component.scss']
})
export class BannerSectionComponent implements OnInit {

  @Input() bannerHeaderText:string;
  @Input() bannerSubText:string;
  @Input() bannerHeaderImage:string;
  @Input() showButton?: boolean;

  constructor() { }

  ngOnInit() {
  }

}
