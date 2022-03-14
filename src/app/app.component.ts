import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'project-task';
//   constructor() { }
//   username="";
//   password='';
// // username:any;
//   poster(){
//     alert(this.username)
//    }
loginForm:FormGroup | any;
// value!:any;



constructor() {}
  
  ngOnInit() {
    this.loginForm = new FormGroup({

name: new FormControl("",Validators.required),


})

  }

 
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

}
