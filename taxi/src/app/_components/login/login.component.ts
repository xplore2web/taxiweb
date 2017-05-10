import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from 'app/_services/login-service/login.service';
import {Hero} from 'app/_models/hero';
import {loginModel} from 'app/_models/login.model';
//let emailRegex = '/^[1-9]\d{0,2}$/g';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    bLoginDetails : loginModel = new loginModel();
    loginForm: FormGroup;
    loginDet: Hero[];
    constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {
        this.loginForm = fb.group({
            'email': [null, Validators.compose([<any> Validators.required])],
            'password': [null, Validators.compose([<any> Validators.required])]
        });
    }
    submitForm(loginDetails:loginModel) {
        alert(JSON.stringify(loginDetails));       
         alert("Successfully logged in.");
        this.getLoginDetails();
        this.router.navigate(['/booking']);
        
    }
    ngOnInit() {
    }

    getLoginDetails(): void {
        this.loginService.getLoginDetails().then(
            response =>
                this.loginDet = response
        );
    }
}
