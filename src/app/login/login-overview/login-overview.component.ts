import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'projects/insite-kit/src/service/auth-service/auth.service';

@Component({
  selector: 'app-login-overview',
  templateUrl: './login-overview.component.html',
  styleUrls: ['./login-overview.component.scss'],
})
export class LoginOverviewComponent implements OnInit {
  form: FormGroup;
  usernameIcon = faUser;
  passwordIcon = faLock;
  loading = false;

  constructor(
    private readonly authService: AuthService,
    private readonly fb: FormBuilder,
    private readonly toastService: ToastrService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onLoginClick() {
    this.loading = true;
    this.authService
      .authenticate(this.form.value.username, this.form.value.password)
      .subscribe(
        (res) => {
          this.router.navigate(['/home']);
          this.loading = false;
        },
        (err) => {
          this.toastService.error('Invalid email or password!');
          this.loading = false;
        }
      );
  }
}
