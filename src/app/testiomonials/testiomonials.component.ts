import { Component, OnInit } from '@angular/core';
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormsModule,FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-testiomonials',
  templateUrl: './testiomonials.component.html',
  styleUrls: ['./testiomonials.component.scss']
})
export class TestiomonialsComponent implements OnInit {
  form: FormGroup;
  
  submit(form:NgForm) {
   form.reset();
 }
  contactMethods=[
      {id:1 , name:'Email'},
      {id:2 , name:'FaceBook'},
      {id:3 , name:'Instagram'},
  ];
  
  newUser =[{name:'' , comment:''}];


  log(x){
      console.log(x)
  }

  // submit(f){
  //   // console.log(f.value)
   
  
  // }
  onAdd(f){
       console.log(f)
    

      //  this.newUser.push(f.contact.firstName, f.contact.comment);
      // this.newUser.push(f.contact.firstName);
      this.newUser.push(f.contact.comment);

       console.log( "new" + this.newUser)
       localStorage.setItem('newUser',JSON.stringify(this.newUser))


  }
  constructor() { 


    class newUser {
      constructor(private name: string,  private comment: string) {}
    }
    
    // create a new message
    new  newUser('Todd Motto', 'Hey, you around?');




    let GetNewUser = localStorage.getItem('newUser');
    if(GetNewUser){
      this.newUser =  JSON.parse(localStorage.getItem('newUser'))
    }else{
      this.newUser =[]
    }

  console.log("loccalAdd" + this.newUser );

  }
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
  ngOnInit() {


    
  }
}
