import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './users/user.module';
@NgModule({
  imports: [SharedModule, LoginModule, HomeModule, UserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
