import { Component, OnInit, HostListener } from '@angular/core';
import { faHome, faEnvelope, faUser, faListAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;
  faHome = faHome;
  faEnvelope = faEnvelope;
  faUser = faUser;
  faListAlt = faListAlt;
 
  constructor() { }

  ngOnInit() {
  }

  toggleNavbar(){
    this.show = !this.show;
    
  }

  toggleNavbar1(){
    this.show = false;
    
  }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 60) {
       console.log("From Header" + window.pageYOffset);
       let element = document.getElementById('navbarMenu');
       console.log("Element NavBar" + element);
       element.classList.add('menu_fixed');
     } else {
      let element = document.getElementById('navbarMenu');
        element.classList.remove('menu_fixed'); 
     }
  }

}
