
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderHComponent } from './header-h/header-h.component';
import { Footer2Component } from './footer2/footer2.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { TestiomonialsComponent } from './testiomonials/testiomonials.component';
import { ContactComponent } from './contact/contact.component';
import { Routes ,RouterModule } from '@angular/router';
import { ShopPageComponent } from './shop-page/shop-page.component';

import { UserComponent } from './user/user.component';
import { EditServiceComponent } from './edit-service/edit-service.component';
import {NgForm} from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { FeatureComponent } from './feature/feature.component';





const appRoutes :Routes =[
    {path:'' ,component:HomeComponent},
    {path:'about' ,component:AboutComponent},
    {path:'about/:id/:name' ,component:FeatureComponent },


    {path:'whatWeDo' ,component:WhatWeDoComponent },
    {path:'whatWeDo/:id/:name' ,component: EditServiceComponent},

    {path:'shop' ,component: ShopPageComponent},

    {path:'testiomonials' ,component: TestiomonialsComponent}, 
    {path:'testiomonials/:id/:name' ,component: UserComponent},

    {path:'contact' ,component: ContactComponent},


    // {path:'' ,component:HomeComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ShopComponent,
    HeaderHComponent,
    Footer2Component,
    HomeComponent,
    AboutComponent,
    WhatWeDoComponent,
    TestiomonialsComponent,
    ContactComponent,
    ShopPageComponent,
 
    UserComponent,
 
    EditServiceComponent,
 
    FeatureComponent,
 
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    OrderModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
