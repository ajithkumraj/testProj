import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm:FormGroup | any;
   
  constructor() {}
    
    ngOnInit() {
      this.loginForm = new FormGroup({
  
  name: new FormControl("",Validators.required),
   
  })
  
    }
    
    displayStyle = "none";
    
    // openPopup() {
    //   this.displayStyle = "block";
    // }
    // closePopup() {
    //   this.displayStyle = "none";
    // }
  
  }
  
