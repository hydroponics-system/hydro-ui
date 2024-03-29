import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PopupService } from 'insite-kit';
import { of, throwError } from 'rxjs';
import { UserService } from 'src/service/user-service/user.service';
import { HydroTestBed } from 'src/test/test-bed';
import { TestData } from 'src/test/test-data';
import { TestDOM } from 'src/test/test-dom';
import { setupTests } from 'src/test/test-setup';
import { CreateAccountComponent } from './create-accountcomponent';

describe('CreateAccountComponent', () => {
  let component: CreateAccountComponent;
  let fixture: ComponentFixture<CreateAccountComponent>;
  let userService;
  let router;
  let popupService;

  setupTests(async () => HydroTestBed.setup());

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountComponent);
    component = fixture.componentInstance;

    userService = TestBed.inject(UserService);
    router = TestBed.inject(Router);
    popupService = TestBed.inject(PopupService);

    spyOn(userService, 'createUser').and.returnValue(of(TestData.getUser()[0]));
    spyOn(router, 'navigate');
    spyOn(popupService, 'error');
    spyOn(popupService, 'success');

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should build form', () => {
    expect(component.form).toBeDefined();
    expect(component.form.value.firstName).toEqual('');
    expect(component.form.value.lastName).toEqual('');
    expect(component.form.value.email).toEqual('');
    expect(component.form.value.password).toEqual('');
  });

  it('should successfully create a user account', () => {
    TestDOM.updateForm('#createAccountForm', {
      firstName: 'Test',
      lastName: 'Admin',
      email: 'Test@Admin.com',
      password: 'newPassword',
    });

    fixture.detectChanges();
    TestDOM.click('#createAccountButton');

    expect(userService.createUser).toHaveBeenCalledWith({
      firstName: 'Test',
      lastName: 'Admin',
      email: 'Test@Admin.com',
      password: 'newPassword',
    });
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(popupService.success).toHaveBeenCalledWith(
      'Account successfully created!'
    );
    expect(component.loading).toBeFalsy();
  });

  it('should error for creating user and show error message', () => {
    userService.createUser.and.returnValue(throwError(of('INVALID')));
    TestDOM.updateForm('#createAccountForm', {
      firstName: 'ERROR',
      lastName: 'ERROR',
      email: 'ERROR',
      password: 'ERROR',
    });

    fixture.detectChanges();
    TestDOM.click('#createAccountButton');

    expect(router.navigate).toHaveBeenCalledWith(['/login']);
    expect(popupService.error).toHaveBeenCalledWith(
      'Could not create account at this time. Try again later.'
    );
    expect(component.loading).toBeFalsy();
  });
});
