import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { LoginOverviewComponent } from './login-overview/login-overview.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent, LoginOverviewComponent],
  imports: [SharedModule],
})
export class LoginModule {}
