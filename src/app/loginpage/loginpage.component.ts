import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ConfirmPasswordValidator } from '../confirm.password';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  loginForm:FormGroup | any;
  submitted: boolean = false;
   ChildtoParent: any;
  constructor(private fb: FormBuilder) {}
    
    ngOnInit() {
      this.loginForm = this.fb.group(
  
        {
          fullname:["",Validators.required],
          username:["",Validators.required],
          phnno:["",Validators.required],
          email: ["",Validators.required],
          password: ["",Validators.required],
          confirmPassword: ["",Validators.required]
        },
        {
          validator: ConfirmPasswordValidator("password", "confirmPassword")
        }
      );
    }
    
    onSubmit() {
      this.submitted = true;
    }
   


    addValue(childvalue: any){
      this.ChildtoParent= childvalue;
      console.log(this.ChildtoParent)
    }
  
  }
  
