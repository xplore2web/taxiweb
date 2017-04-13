import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
//let emailRegex = '/^[1-9]\d{0,2}$/g';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;
    constructor(fb: FormBuilder,private router: Router) {
        this.loginForm = fb.group({
            'email': [null, Validators.compose([<any> Validators.required])],
            'password': [null, Validators.compose([<any> Validators.required])]
        });
    }
    submitForm(){
        alert("Successfully logged in.");
        this.router.navigate(['/dashboard']);
    }
    ngOnInit() {
    }

}
