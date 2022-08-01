import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from 'insite-kit-temp';
import { ToastrService } from 'ngx-toastr';
import { setupTests } from 'projects/insite-kit/src/test/test-setup';
import { of, throwError } from 'rxjs';
import { HydroTestBed } from 'src/test/test-bed';
import { TestData } from 'src/test/test-data';
import { TestDOM } from 'src/test/test-dom';
import { LoginOverviewComponent } from './login-overview.component';

describe('LoginOverviewComponent', () => {
  let component: LoginOverviewComponent;
  let fixture: ComponentFixture<LoginOverviewComponent>;
  let authService;
  let router;
  let toastService;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginOverviewComponent);
    component = fixture.componentInstance;

    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    toastService = TestBed.inject(ToastrService);

    spyOn(authService, 'authenticate').and.returnValue(
      of(TestData.getAuthToken())
    );

    spyOn(router, 'navigate');
    spyOn(toastService, 'error');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should build form', () => {
    expect(component.form).toBeDefined();
    expect(component.form.value.username).toEqual('');
    expect(component.form.value.password).toEqual('');
  });

  it('should login successfully when login button is clicked', () => {
    TestDOM.updateForm('#loginForm', {
      username: 'test@mail.com',
      password: 'testPassword',
    });

    fixture.detectChanges();
    TestDOM.click('#loginButton');

    expect(authService.authenticate).toHaveBeenCalledWith(
      'test@mail.com',
      'testPassword'
    );
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
    expect(toastService.error).not.toHaveBeenCalled();
    expect(component.loading).toBeFalsy();
  });

  it('should not be able to login and show error message', () => {
    authService.authenticate.and.returnValue(throwError(of('Invalid')));
    TestDOM.updateForm('#loginForm', {
      username: 'test@mail.com',
      password: 'testPassword',
    });
    fixture.detectChanges();

    TestDOM.click('#loginButton');

    expect(authService.authenticate).toHaveBeenCalledWith(
      'test@mail.com',
      'testPassword'
    );
    expect(router.navigate).not.toHaveBeenCalled();
    expect(toastService.error).toHaveBeenCalledWith(
      'Invalid email or password!'
    );
    expect(component.loading).toBeFalsy();
  });
});
