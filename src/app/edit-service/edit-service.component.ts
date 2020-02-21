import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-service',
  templateUrl: './edit-service.component.html',
  styleUrls: ['./edit-service.component.scss']
})
export class EditServiceComponent implements OnInit {
  idd:number;
  ReturnId ;
  ReturnName ;
  product :{id :number , name :string};
  // user:{ id:number , name :string };
  paramsSubscription :Subscription;
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
  constructor(private route :ActivatedRoute) { }

  ngOnInit() {
    this.product ={
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params :Params)=>{
        this.product.id =params['id'];
        this.product.name =params['name'];
      }  
     
    )

    this.route.params.subscribe(params =>{
      console.log(params);
    
      this.ReturnId =   +params['id'];
      this.ReturnName = params['name'];

      console.log(this.ReturnName)
      
    })
  
  }



ngOnDestroy(){
  this.paramsSubscription.unsubscribe();
}
  // private newMethod():void {
  //   const id = this.route.snapshot.paramMap.get('id');
  // }
}
