import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../projects/insite-kit/src/service/auth-service/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginOverviewComponent } from './login/login-overview/login-overview.component';
import { LoginComponent } from './login/login.component';

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
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
