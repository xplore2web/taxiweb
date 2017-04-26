import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
       signupForm : FormGroup;

  constructor(fb: FormBuilder,private router: Router) {
           this.signupForm = fb.group({
               'name': [null, Validators.compose([<any> Validators.required])],
            'email': [null, Validators.compose([<any> Validators.required])],
            'password': [null, Validators.compose([<any> Validators.required])],
            'comfirmPassword': [null, Validators.compose([<any> Validators.required])]
        });
   }
      submitForm(){
        alert("Successfully logged in.");
        this.router.navigate(['/dashboard']);
    }

  ngOnInit() {
  }
  
}

   