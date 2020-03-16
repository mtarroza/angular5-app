import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/login/logout.component';
import { UsersComponent } from './components/users/users.component';
import { AuthGuard } from './helpers/canActivateAuthGuard';

/**
 * dashboard: home page
 * canActivate [AuthGuard]: will allow us to check if user is logged in, otherwise redirect to login page
 * login: page where the user can authenticate
 * logout: path to log the user out
 * users: first page where we want to list the users from back end
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'users', component: UsersComponent,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
