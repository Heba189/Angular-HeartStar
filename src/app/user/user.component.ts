import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user:{ id:number , name :string };
  users =[
    {
      id :1,
      name:'JAMES FRANCO',
      imgUrl:'assets/users/testi-1.png',
      content:' It is the best shop I have ever been. I found there everything I was looking for.'
     
    },
    {
      id :2,
      name:'MELISSA HOWARD',
      imgUrl:'assets/users/testi-2.png',
      content:'I love the variety of items this shop offers. A little something for everyone and I can not say enough about the friendly service. I’m looking forward to stopping in again soon. '
     
    },
  
    {
      id :3,
      name:'JOANN CARDONA',
      imgUrl:'assets/users/testi-3.png',
      content:'Aliquam erat volutpat. Phasellus tristique augue elit, eget luctus velit imperdiet mollis. Nulla quis ex orci. Etiam lobortis mauris a semper hendrerit. Nulla quis neque non ex aliquam facilisis. Morbi tempor est ut mollis rutrum. Donec mattis scelerisque nunc a dapibus. '
     
    },
    {
      id :4,
      name:'LINDA JOHNS',
      imgUrl:'assets/users/testi-4.png',
      content:'5 stars Love it! Amazing Case. Just enough protection for everyday use. The slim fit case feels really nice in the hands. The design is really well done. The hardest part is picking only one. '
     
    },
    
    {
      id :5,
      name:'LAURIE MILLER',
      imgUrl:'assets/users/testi-5.png',
      content:'Very friendly owner. Showed me the shop. Answered all questions. Bonus, extra fast shipping! Thank you so much! '
     
    },
    {
      id :6,
      name:'ASHLEY SKINNER',
      imgUrl:'assets/users/testi-6.png',
      content:'I love the variety of items this shop offers. A little something for everyone and I can’t say enough about the wonderful service. I love this place. You are the best. '
     
    }
  ]
  constructor(private route :ActivatedRoute ) { }

  ngOnInit() {

   this.user ={
     id : this.route.snapshot.params['id'],
     name : this.route.snapshot.params['name'],
    //  imgUrl :this.user.imgUrl,
    //  content :this.user.content,
   };

   this.route.params
   .subscribe(
     (params :Params)=>{
       this.user.id =params['id'];
       this.user.name =params['name'];
     }
   )
  }

  
  
}
