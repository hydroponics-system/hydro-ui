import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CreateAccountComponent } from './create-account/create-accountcomponent';
import { LoginOverviewComponent } from './login-overview/login-overview.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginOverviewComponent,
    CreateAccountComponent,
  ],
  imports: [SharedModule],
})
export class LoginModule {}
