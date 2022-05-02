import { NgModule } from '@angular/core';
import { AuthGuard } from '../../projects/insite-kit/src/service/auth-service/auth.guard';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, LoginModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
