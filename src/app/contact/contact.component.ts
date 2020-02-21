import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { usernameValidators } from './username.validators';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form = new FormGroup({

    userName : new FormControl('',[
              Validators.required,
              Validators.minLength(3),
              usernameValidators.cannotContainSpace,
              // usernameValidators.shouldBeUnique
    ]),
    
    
  passWord : new FormControl('',Validators.required )
        

   
  });
  login(){
    this.form.setErrors({
      invalidLogin : true
    })
  }

  get username(){
      return this.form.get('userName');
  }



  constructor() { }



  ngOnInit() {
  }

}
