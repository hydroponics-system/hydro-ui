import { NgModule } from '@angular/core';
import { AuthGuard } from '../../projects/insite-kit/src/service/auth-service/auth.guard';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  imports: [SharedModule, LoginModule, HomeModule],
  declarations: [AppComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
