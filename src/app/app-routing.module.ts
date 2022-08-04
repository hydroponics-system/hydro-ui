import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'insite-kit';
import { HomeComponent } from './home/home.component';
import { CreateAccountComponent } from './login/create-account/create-accountcomponent';
import { LoginOverviewComponent } from './login/login-overview/login-overview.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './users/user.component';

/**
 * Make sure to add back CanActivate on Home
 */
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: LoginOverviewComponent },
      { path: 'account/create', component: CreateAccountComponent },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
