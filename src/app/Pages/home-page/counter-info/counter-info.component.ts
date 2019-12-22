import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-counter-info',
  templateUrl: './counter-info.component.html',
  styleUrls: ['./counter-info.component.scss']
  //animations:[
  //  trigger('conterAnimation',[
  //    state('show', style({
   //     opacity: 1,
  //      transform: "translateX(0)"
  //    })),
  //    state('hide',style({
  //      opacity: 0.40,
  //      transform: "translateX(0)"
  //    })),
 //     transition('show => hide', animate('350ms ease-out')),
 //     transition('hide => show', animate('150ms ease-in'))
 //   ])
 // ]
})
export class CounterInfoComponent implements OnInit {

  //counterState = 'hide';
  //constructor(public el: ElementRef) { }

  ngOnInit() {
  }

 // @HostListener('window:scroll', ['$event'])
 // checkCounterScroll(){
  //  const counterPosition = this.el.nativeElement.offsetTop;
 //   const scrollPosition = window.pageYOffset;

  //  if (scrollPosition >= counterPosition){
 //     this.counterState = 'show';
    //} else {
     // this.counterState = 'hide';
  //  }
 // }

}
