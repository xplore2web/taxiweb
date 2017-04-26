import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './_components/signup/signup.component';
import { HeaderComponent } from './_components/header/header.component';
import { LoginComponent } from './_components/login/login.component';
import { MySignupComponent } from './_components/my-signup/my-signup.component';
import { AdminComponent } from './_components/admin/admin.component';
import { HomepageComponent } from './_components/homepage/homepage.component';
import { OrderComponent } from './_components/order/order.component';
import {routing} from 'app/routes';
import {Http} from '@angular/http';
import {HttpTestService} from 'app/_services/http-service/http-test.service';
import {HeroService} from 'app/_services/Hero-service/Hero.service';
import {DashService} from 'app/_services/dashboard-service/dash.service';
import { EmployeeComponent } from './_components/employee/employee.component';
import { DashboardComponent } from './_components/dashboard/dashboard.component';
import {LoginService} from 'app/_services/login-service/login.service';
import { DashboardHeaderComponent } from './_components/dashboard-header/dashboard-header.component';
import { BookingComponent } from './_components/booking/booking.component';
import { TicketsearchComponent } from './_components/ticketsearch/ticketsearch.component';
import { DestinationComponent } from './_components/destination/destination.component';
import { DriverinfoComponent } from './_components/driverinfo/driverinfo.component';
import { ReportsComponent } from './_components/reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    MySignupComponent,
    AdminComponent,
    HomepageComponent,
    OrderComponent,
    EmployeeComponent,
    DashboardComponent,
    DashboardHeaderComponent,
    BookingComponent,
    TicketsearchComponent,
    DestinationComponent,
    DriverinfoComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [Http, HttpTestService, HeroService, DashService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
