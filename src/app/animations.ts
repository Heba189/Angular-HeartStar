import { trigger, style, state, transition, animate, keyframes } from '@angular/animations';
import { AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
// import ScrollOut from 'scroll-out';
export let slideLeft = trigger('slideLeft',[
//    transition('',[
//        style({transform :'translateX(-10px)'}),
//        animate(500)
//     ]),
   transition('* => void',[
    
    animate('.5s ease-out',keyframes([
        style({
               offset:.2,
               opacity :1,
               transform:'traslateX(20px)' 
        }),
        style({
            offset:1,
            opacity :0,
            transform:'traslateX(-100%)' 
     }),

    ]))

    // style({transform :'translateX(-100%)'}))
    
    
])])

// export let Animat =trigger('slide',[
    // transition(':enter',[
    //     style({transform :'translateX(-10px)'}),
    //     animate(500)
    // ]),
    // transition(':enter',[
    //     animate('3000s' ,keyframes([
    //       style({
    //         offset:.2,
    //         opacity:1,
    //         transform:'translateX(20px)'
    //       }),
    //       style({
    //         offset:1,
    //         opacity:0,
    //         transform:'translateX(-100%)'
    //       }),
    //     ]))
    //   ])
// ])


// export class MyComponent implements AfterContentInit, OnDestroy {
//     so: any;
  
//     constructor(private el: ElementRef) {}
  
//     ngAfterContentInit() {
//       this.so = ScrollOut({
//         scope: this.el.nativeElement
//       });
//     }
  
//     ngOnDestroy() {
//       this.so.teardown();
//     }
//   }