import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  templateUrl: './what-we-do.component.html',
  styleUrls: ['./what-we-do.component.scss']
})
export class WhatWeDoComponent implements OnInit {
  valueID ;
  products =[
    {
      id :1,
      name:'Gift Cards',
      imgUrl:'assets/services/s1.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
     
    },
    {
      id :2,
      name:'Custom Gifts',
      imgUrl:'assets/services/s2.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
     
    },
  
    {
      id :3,
      name:'Gift Baskets',
      imgUrl:'assets/services/s3.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
     
    },
    {
      id :4,
      name:'Bakery & Chocolates',
      imgUrl:'assets/services/s4.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
    },
    
    {
      id :5,
      name:'Gift Packaging',
      imgUrl:'assets/services/s5.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
     
    },
    {
      id :6,
      name:'Parties & Events',
      imgUrl:'assets/services/s6.jpg',
      content:'Nunc maximus nisi sapien sem blandit, vitae vestibulum eros et ornare. Praesent odio nisi, lobortis quam, laoreet placerat odio.'
     
    }
  ]
  constructor(private route:Router) { }

  ngOnInit() {
  }

  // onLoadBtn(id:number){
    
  //     this.route.navigate(['/whatWeDo',id,'LearnMore'])
  // }
}
