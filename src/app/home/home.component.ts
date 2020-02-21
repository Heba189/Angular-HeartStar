import {
   Component,
   OnInit ,
  //  trigger ,
  //  state,
  //  style  
  } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes, group, query } from '@angular/animations';
import { slideLeft } from '../animations';

// import ScrollOut from "scroll-out";
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations:[
    slideLeft ,
    trigger('Animatio5',[
      transition(':enter',[
        query('h2.h2Shop',[
          style({transform:'translateY(-30px)'}),
          animate(3000)
        ])])]),
//////////////////////////////////////
trigger('slideRight',[
    transition('void =>*',[
      style({
        opacity:0,
        transform:'translateX(0px)'
      }),
      group([
        animate(5000,style({
          opacity:1
        })),
        animate(2000 ,style({
          transform:'translateX(-30px)'
        }))
      ])
    ])
]),
//////////////////////////////
//////////////////////////////////////
trigger('sliddeLeft',[
  transition('void =>*',[
    style({
      opacity:0,
      transform:'translateX(0px)'
    }),
    group([
      animate(5000,style({
        opacity:1
      })),
      animate(2000 ,style({
        transform:'translateX(30px)'
      }))
    ])
  ])
]),
//////////////////////////////

//////////////////////////////////////
trigger('top',[
  transition('void =>*',[
    style({
      opacity:0,
      transform:'translateX(100px)'
    }),
    group([
      animate(1000,style({
        opacity:1
      })),
      animate(500 ,style({
        transform:'translateX(0)'
      }))
    ])
  ])
]),
//////////////////////////////
//////////////////////////////////////
trigger('down',[
  transition('void =>*',[
    style({
      opacity:0,
      transform:'translateX(100px)'
    }),
    group([
      animate(1000,style({
        opacity:1
      })),
      animate(500 ,style({
        transform:'translateX(0)'
      }))
    ])
  ])
]),
//////////////////////////////
    trigger('AnimationsAll',[
        transition(':enter',[
          query('h3',  [
            style({transform:'translateY(-30px)'}),
            animate(1000)
          ]),

          
         
          query('p',[
            style({transform:'translateX(-30px)'}),
            animate(1000)
          ]),
           query('a.btn-floating',[
            style({transform:'translateX(30px)'}),
            animate(1000)
          ]),
          query('button',[
            style({transform:'translateY(30px)'}),
            animate(1000)
          ]),
        ])
    ]),

    trigger('AnimationsAll2',[
      transition(':enter',[
        query('.coll', [
          style({transform:'translateX(-35px)'}),
          animate(1000)
        ]),
        query('.coll2',[
          style({transform:'translateX(35px)'}),
          animate(1000)
        ]),
        
      ])
  ]),

  trigger('AnimationsAll3',[
    transition(':enter',[
     
      query('.coll2',[
        style({transform:'translateX(35px)'}),
        animate(2000)
      ]),
      
    ])
]),

// trigger('TryAnimate',[
//   transition(':enter', [
//   style({ opacity: 0 }),
//   animate('5000ms', style({ opacity: 1, transform:'translateY(30px)' })),
// ])
// ]),


    trigger('divState', [
        state ('normal',style({
            'background-color':'red',
            transform :'translateX(0)  scale(1)'

        })),
        state ('highlighted' ,style({
          'background-color':'blue',
          transform :'translateX(100px) scale(1) '  
        })),
        transition('normal <=> highlighted' , animate(300)),
        // transition('highlighted => normal' , animate(800))
    ]),
    ///////////////////////////////////// 2 ///////////////////////////////////////

    trigger('wildstate', [


      state ('normal',style({
        'background-color':'red',
        transform :'translateX(0px) scale(1) '

    })),

      state ('highlighted',style({
          'background-color':'blue',
          transform :'translateX(100px) scale(1) '

      })),
      state (' shrunken ' ,style({
        'background-color':'green',
        transform :'translateX(0) scale(0.5) '  
      })),
      transition('normal => highlighted' , animate(300)),
      transition('highlighted => normal' , animate(800)),
      // transition('shrunken <=> *' , animate(500 ,style({
      //   borderRadius :'50px',
      // }))),

       transition('shrunken <=> *' , [
          style({
              'background-color' : 'orange'
          }),
          animate(1000 ,style( {
            borderRadius :'50px'
          })),
          animate(500)
       ]),
      


      // transition('highlighted => normal' , animate(800))
  ]),


  ///////////////////////////////////////////////////////////
  trigger('list1', [


    state ('in',style({
      opacity :1,
      transform :'translateX(0px)'

  })),

    
    transition(  'void => *', 
      [
     
        style({
          opacity:0,
          transform :'translateX(-100px)'
        }),
          animate(300)
      
  ]), 
      /////////////////////////////////////
      
      transition(  '* => void', 
      [
     
       
          animate(300 ,style({
            transform :'translateX(100px)',
            opacity :0
          }))
      
  ]),    



     ]) ,
/////////////////////////////////////////////////////////////


     trigger('list2', [


      state ('in',style({
        opacity :1,
        transform :'translateX(0px)'
  
    })),
  
      
      transition(  'void => *', 
        [
       
          animate (1000 ,keyframes([
            style({
              transform :' translateX(-100px)',
              opacity :0,
              offset : 0
            }),
            style({
              transform :' translateX(-50px)',
              opacity :.5,
              offset : .3
            }),

            style({
              transform:' translateX(-20px)',
              opacity :1,
              offset : .8
            }),

            
            style({
              transform:' translateX(0px)',
              opacity :1,
              offset : 1
            })

          ]) )
        
        ]), 
        /////////////////////////////////////
        
        transition(  '* => void', 
        [
          group([

            animate(800 ,style({
              transform :'translateX(100px)',
              opacity :0
            })),


            animate(300 ,style({
             color:'red'
            })),
          ])
       
         
        
    ]),    
  
  
  
       ]) ,

    ]
  })
 
    // transition('highlighted => normal' , animate(800)),
    // transition('shrunken <=> *' , animate(500 ,style({
    //   borderRadius :'50px',
    // }))),

    


    // transition('highlighted => normal' , animate(800))

   

export class HomeComponent implements OnInit {
state ='normal';
wildstate ='normal';

access :boolean =true ;
funny :boolean = false;
gadjets :boolean = false;
party :boolean =false;
tasty :boolean =false;




list = ['Heba' ,'Menna','Ali','Mai'];





  constructor(private router: Router) { }

  ngOnInit() {
    // ScrollOut({
    //   onShown: function(el) {
    //     // use the web animation API
    //     el.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    //   },
    //   onHidden: function(el) {
    //     // hide the element initially
    //     el.style.opacity = 0;
    //   }
    // });
  }
  acess(){
    this.access = true;
    this.funny =false;
    this.gadjets =false ;
    this.party =false;
    this.tasty =false;
  }


  funnyC(){
    this.access =false;
    this.funny =true;
    this.gadjets =false;
    this.party =false;
    this.tasty =false;  
}
gadjetsC(){
  this.access =false;
  this.funny =false;
  this.gadjets =true;
  this.party =false;
  this.tasty =false;  
}
partyC(){
  this.access =false;
  this.funny =false;
  this.gadjets =false;
  this.party =true;
  this.tasty =false; 
}
tastyC(){
  this.access =false;
  this.funny =false;
  this.gadjets =false;
  this.party =false;
  this.tasty =true; 
}



  onloadShop(){
      this.router.navigate(['/shop'])
  }

  onAdd(item){
      this.list.push(item);
  }

  onDelete(item){
    this.list.splice(this.list.indexOf(item) ,1)
  }

  onAnimate(){
    this.state == 'normal'? this.state ='highlighted':this.state ='normal';
    this.wildstate  == 'normal'? this.wildstate  ='highlighted':this.wildstate  ='normal';

  }

  
  onShrink(){
    this.wildstate ='shrunken';
  }

  animationStarted($event){
      console.log(event);
  }

  animationEnded($event){
      console.log(event);
  }

}

