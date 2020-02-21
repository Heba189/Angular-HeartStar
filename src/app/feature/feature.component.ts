import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {
  ReturnID;
  ReturnNAME; 
  Feature :{id :number , name :string};
  paramsSubscription :Subscription;
  Features =[
    {
      id:1,
      name :'EXTENSIVE GIFTS COLLECTION',
      imgUrl :'http://heartstar.axiomthemes.com/wp-content/uploads/2017/10/033-gift.png',
      img:'assets/services/s1.jpg'
    },
    {
      id :2,
      name :'ONLINE GIFT PREVIEW & SHOPPING',
      imgUrl :'http://heartstar.axiomthemes.com/wp-content/uploads/2017/10/034-shopping.png',
      img:'assets/services/s2.jpg'
    },
  
    {
      id:3,
      name :'FRIENDLY & HELPFUL STAFF',
      imgUrl :'http://heartstar.axiomthemes.com/wp-content/uploads/2017/10/035-support.png',
      img:'assets/services/s3.jpg'
    },
    {
      id :4,
      name :'FREE DEPENDABLE DELIVERY',
      imgUrl :'http://heartstar.axiomthemes.com/wp-content/uploads/2017/10/036-delivery.png',
      img:'assets/services/s4.jpg'
    },
    {
      id:5,
      name :'OUR PRICE & PROFIT GUARANTEE',
      imgUrl :'http://heartstar.axiomthemes.com/wp-content/uploads/2017/10/037-guarantee.png',
      img:'assets/services/s5.jpg'
    },
   
  ]




  constructor(private route :ActivatedRoute) { }

  ngOnInit() {

    this.Feature ={
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name'],
    };
    this.paramsSubscription = this.route.params
    .subscribe(
      (params :Params)=>{
        this.Feature.id =params['id'];
        this.Feature.name =params['name'];
      }  
     
    )

    this.route.params.subscribe(params =>{
      console.log(params);
    
      this.ReturnID =   +params['id'];
      this.ReturnNAME = params['name'];

      console.log(this.ReturnNAME)
      
    })

  }

}
