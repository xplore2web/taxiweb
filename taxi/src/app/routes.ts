import { Routes, RouterModule } from '@angular/router';
import { MySignupComponent} from 'app/_components/my-signup/my-signup.component';
import {HomepageComponent} from 'app/_components/homepage/homepage.component';
import {OrderComponent} from 'app/_components/order/order.component';
import {EmployeeComponent} from 'app/_components/employee/employee.component';
import {DashboardComponent} from 'app/_components/dashboard/dashboard.component';
import {SignupComponent} from 'app/_components/signup/signup.component';
import {LoginComponent} from 'app/_components/login/login.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  // map '/' to '/persons' as our default route dashboard
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

export const routing = RouterModule.forRoot(routes);

