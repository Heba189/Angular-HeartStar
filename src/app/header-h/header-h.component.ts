import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderPipe } from 'ngx-order-pipe';
import { Products } from '../header-h/Product.model';

@Component({
  selector: 'app-header-h',
  templateUrl: './header-h.component.html',
  styleUrls: ['./header-h.component.scss']
})
export class HeaderHComponent implements OnInit {
  GetValue =30;
  SelectArray: [];
  AllProducts : Products[]=[

    new Products('Sunglasses',12,'assets/access/p1.jpg'),
    new Products('Necklace',13,'assets/access/p2.jpg'),
    new Products('Watch',14,'assets/access/p3.jpg'),
    new Products('Tie',15,'assets/access/p4.jpg'),
    new Products('Bow tie',16,'assets/access/p5.jpg'),
    new Products('Purse',17,'assets/access/p2.jpg'),

  ];
  array: any[] = [{ name: 'John' , age:14 } , { name: 'Mary', age :6 }, { name: 'Adam' ,age :30 }];
  // order: string = 'name';
  order: string = 'age' ;


  show:boolean=true;
  show1:boolean = false;
  lth :boolean =true;
  htl : boolean =false;

  largeB :boolean =true;
  listB:boolean =false;

  constructor(
    private router:Router ,
    private orderPipe: OrderPipe,
    private route:ActivatedRoute) {
      
      this.SelectArray = this.orderPipe.transform(this.accessories ,this.order2 );
      console.log(this.SelectArray);

     }

  ngOnInit() {
  }


  onReload(){
      this.router.navigate(['/shop'],{relativeTo :this.route})
  }

  accessories: any[] = 
  [{ name: 'Generation Funk1' , price:19 ,imgUrl :"assets/access/p1.jpg" } , { name: 'Generation Funk2', price :13, imgUrl :"assets/access/p2.jpg"   }, { name: 'Generation Funk3' , price :14 ,imgUrl :"assets/access/p3.jpg" },
  { name: 'Generation Funk4' , price:15 ,imgUrl :"assets/access/p4.jpg" } , { name: 'Generation Funk5', price :16, imgUrl :"assets/access/p5.jpg"   }, { name: 'Generation Funk6' , price :17 ,imgUrl :"assets/access/p2.jpg" }
   ];


   order2 : string ='price';

   lthClick(){
     this.lth =true;
     this.htl =false;
   }

   htlClick(){
     this.lth = false;
     this.htl = true;
   }

   large(){
     this.largeB = true;
     this.listB =false;
   }

   list(){
     this.listB = true;
     this.largeB =false;

   }

   onKeyUp(){
     console.log(this.GetValue);
   }
}
